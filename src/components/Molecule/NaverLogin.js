import styled from 'styled-components'
// useEffect 와 같이 기본으로 제공하는 훅이기에 같이 import 해주자.
import { useEffect, useRef } from 'react'
import {NaverLoginTitle,NaverLoginBtn,NaverIcon} from "../atoms/Loginatom";
import Naver from "../../assets/btnG_완성형.png"

const NaverLogin = () => {

// useRef 를 선언 해준다.
    const naverRef = useRef()
    const { naver } = window


// 1부에 작성 된 코드 그대로 사용한다면 ?
    // 위에 2줄의 코드를 주석처리 하고 아래 코드를 사용하자.
    const NAVER_CLIENT_ID = "hTX0wgRVebDvpZxTr98y"// 발급 받은 Client ID 입력
    const NAVER_CALLBACK_URL = "http://localhost:3000/naver/callback"// 작성했던 Callback URL 입력

    const initializeNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({

            // 위에 Client Id 랑 Callback Url 적었는데 ? 라고 혹시 생각한다면
            // 변수 처리를 해준 것이기에 그냥 넘어가면 된다.
            clientId: NAVER_CLIENT_ID,
            callbackUrl: NAVER_CALLBACK_URL,
            isPopup: false,
            loginButton: { color: 'green', type: 3, height: 58 },
            callbackHandle: true,
        })
        naverLogin.init()
    }

    const userAccessToken = () => {
        window.location.href.includes('access_token') && getToken()
    }
    const getToken = () => {
        const token = window.location.href.split('=')[1].split('&')[0]
    }

    useEffect(() => {
        initializeNaverLogin()
        userAccessToken()
    }, [])


    // handleClick 함수 onClick 이벤트 발생 시 useRef 를 통해 지정한 naverRef 항목이 클릭 된다.
    // current 를 통해 아래 div 태그의 ref={} 속성을 줄 수 있다. ( 자세한 내용은 공식문서를 확인하자. )
    const handleNaverLogin = () => {
        naverRef.current.children[0].click()
    }

    return (
        <>
            <NaverIdLogin ref={naverRef} id="naverIdLogin" />
            <NaverLoginBtn onClick={handleNaverLogin}>
                <NaverIcon src={Naver}/>
                <NaverLoginTitle>네이버로 시작하기</NaverLoginTitle>
            </NaverLoginBtn>
        </>
    )
}

export default NaverLogin


// 이 부분부터 styled-components 로 작성 된 코드이기에 css 를 사용한다면 잠시 코드 아래의 설명을 보고 오자!


// 기존 로그인 버튼이 아닌 커스텀을 진행한 로그인 버튼만 나타내기 위해 작성
const NaverIdLogin = styled.div`
	display: none;
`
