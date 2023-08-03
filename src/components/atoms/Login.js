import styled from 'styled-components'
import Naver from "../../assets/naver_icon_square.png"
import Kakao from "../../assets/kakao_icon.png"

export const Loginbtn = styled.button`
  font-size : 20px;
  color: white;
  justify-content: center;
  background-color : #B9BBDF;
  width: 465px;
  height: 45px;
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
	width: 230px;
	height: 45px;
	background-color: white;
	border-radius: 6px;
	border: 1px solid #8A96A8;
	margin-right: 10px;
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
	margin-left: 50px;
	color: black;
	font-weight: 400;
	font-size: 12px;
	line-height: 24px;
`
export const KakaoLoginBtn = styled.button`
	display: flex;
	align-items: center;
	width: 230px;
	height: 45px;
	background-color: white;
	border-radius: 6px;
	border: 1px solid #8A96A8;
	&:hover {
		opacity: 0.5;
	}
	
	`
export const KakaoIcon = styled.div`
	width: 40px;
	height: 40px;
	margin-left: 10px;
	background: url(${Kakao}) no-repeat center;
	background-size: 30px;
`
export const KakaoLoginTitle = styled.span`
	margin-left: 50px;
	color: black;
	font-weight: 400;
	font-size: 12px;
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