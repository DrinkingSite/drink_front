import { useEffect, useState } from "react";
import {KakaoLoginBtn,KakaoIcon,KakaoLoginTitle} from "../atoms/Loginatom";
import Kakao_Icon from "/Users/shinhee/drink_front/src/assets/kakao_icon.png"
import MyInfo from "./MyInfo";

function KakaoLogin() {
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const { Kakao } = window;
    const initKakao = async () => {
        const jsKey = "3c5fd0d61672a00438664be501823461";
        if (Kakao && !Kakao.isInitialized()) {
            await Kakao.init(jsKey);
            console.log(`kakao 초기화 ${Kakao.isInitialized()}`);
        }
    };
    const kakaoLogin = async () => {
        await Kakao.Auth.login({
            success(res) {
                console.log(res);
                Kakao.Auth.setAccessToken(res.access_token);
                console.log("카카오 로그인 성공");

                Kakao.API.request({
                    url: "/v2/user/me",
                    success(res) {
                        console.log("카카오 인가 요청 성공");
                        setIsLogin(true);
                        const kakaoAccount = res.kakao_account;
                        localStorage.setItem("email", kakaoAccount.email);
                        // localStorage.setItem(
                        //     "profileImg",
                        //     kakaoAccount.profile.profile_image_url
                        // );
                        localStorage.setItem("nickname", kakaoAccount.profile.nickname);
                    },
                    fail(error) {
                        console.log(error);
                    },
                });
            },
            fail(error) {
                console.log(error);
            },
        });
    };

    const kakaoLogout = () => {
        Kakao.Auth.logout((res) => {
            console.log(Kakao.Auth.getAccessToken());
            console.log(res);
            localStorage.removeItem("email");
            localStorage.removeItem("profileImg");
            localStorage.removeItem("nickname");
            setUser(null);
        });
    };

    useEffect(() => {
        initKakao();
        Kakao.Auth.getAccessToken() ? setIsLogin(true) : setIsLogin(false);
    }, []);

    useEffect(() => {
        console.log(isLogin);
        if (isLogin) {
            setUser({
                email: localStorage.getItem("email"),
                profileImg: localStorage.getItem("profileImg"),
                nickname: localStorage.getItem("nickname"),
            });
        }
    }, [isLogin]);

    return (
        <div>
            {user ? (
                <KakaoLoginBtn onClick={kakaoLogout}>
                    <KakaoIcon src={Kakao_Icon}/>
                    <KakaoLoginTitle>로그아웃</KakaoLoginTitle>
                </KakaoLoginBtn>
            ) : (
                <KakaoLoginBtn onClick={kakaoLogin}>
                    <KakaoIcon src={Kakao_Icon}/>
                    <KakaoLoginTitle>카카오로 시작하기</KakaoLoginTitle>
                </KakaoLoginBtn>
            )}
        </div>
    );
}

export default KakaoLogin;