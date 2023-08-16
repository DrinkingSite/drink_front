import { useEffect } from "react";
import axios from "axios";

const Redirection = () => {
    useEffect(() => {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get('code');
        const grantType = "authorization_code";
        const REST_API_KEY = 'afff43a568857f12cfa33fb10137c8ad';
        const REDIRECT_URI = 'http://localhost:3000/kakao/callback';

        axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {},
            { headers: { "Content-type": "application/x-www-form-urlencoded;charset=utf-8" } }
        )
            .then((res) => {
                console.log(res);
                const { access_token } = res.data;
                axios.post(
                    `https://kapi.kakao.com/v2/user/me`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
                        }
                    }
                )
                    .then((res) => {
                        console.log('2번째', res);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            로그인성공
        </div>
    );
};

export default Redirection;
