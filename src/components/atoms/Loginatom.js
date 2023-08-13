import styled from 'styled-components'
import Naver from "../../assets/naver_icon_square.png"
import Kakao from "../../assets/kakao_icon.png"


export const Loginbtn = styled.button`
	font-size : 20px;
	color: white;
	justify-content: center;
	background-color : #B9BBDF;
	width: 100%;
	height: 100%;
	border:none;
	margin-bottom: 20px;

	border-radius:10px;
	text-align: center;
	font-weight: bold;
	margin-top: 20px;
	&:hover {
		opacity: 0.5;
	}
`

export const NaverLoginBtn = styled.button`
	display: flex;
	align-items: center;
	width: 450px;
	height: 50px;
	background-color: white;
	border-radius: 6px;
	border: 1px solid #03C75A;
	background-color: #03C75A;
	margin-right: 10px;
	margin-bottom: 20px;
	&:hover {
		opacity: 0.5;
	}
`
export const NaverIcon = styled.div`
	width: 30px;
	height: 30px;
	margin-left: 10px;
	background: url(${Naver}) no-repeat center;
	background-size: 30px;
`
export const NaverLoginTitle = styled.span`
	margin-left: 130px;
	color: White;
	font-weight: 500;
	font-size: 15px;
	line-height: 24px;
	text-align: center;
`
export const KakaoLoginBtn = styled.button`
	display: flex;
	align-items: center;
	width: 450px;
	height: 50px;
	background-color: #FEE500;
	border-radius: 6px;
	border: 1px solid #FEE500;
	&:hover {
		opacity: 0.5;
	}

`
export const KakaoIcon = styled.div`
	width: 50px;
	height: 50px;
	background: url(${Kakao}) no-repeat center;
	background-size: 35px;
`
export const KakaoLoginTitle = styled.span`
	margin-left: 125px;
	color: Black;
	font-weight: 400;
	font-size: 15px;
	line-height: 24px;
	
`
export const Signup= styled.button`
	font-family : "Inter";
	font-size: 1.2rem;
	font-weight: bold;
	margin-bottom : 10px;
	border: 0;
	background-color: transparent;
	
	`