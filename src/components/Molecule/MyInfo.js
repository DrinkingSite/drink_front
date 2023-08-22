import styled from "styled-components";
export const Infoheader = styled.h1`
    margin-bottom: 60px;
    
  `


export const Info = styled.div`
    align-items: center;
  text-align: center;

 
`
const infoStyle = {
    marginBottom: "10px", // 아래에 여백을 줘서 줄바꿈 효과를 줍니다.
};

export const MyInfostyle = styled.div`
    flex:0.7;
  
    justify-content:center;
    margin-top:5%;
    //marginLeft:20
`

export default function MyInfo(){

    const storedEmail = localStorage.getItem("email");
    const storedNickname = localStorage.getItem("nickname");

    return(

            <Info>
                <Infoheader>
                    내정보
                </Infoheader>
                <div>
                    {storedNickname &&
                        <div style={{textAlign:"center"}}>

                            <h3>회원명</h3>
                            {storedNickname}

                        </div>
                    }
                    {storedEmail &&
                        <div style={{textAlign:"center"}}>

                            <h3>이메일</h3>
                            {storedEmail}
                        </div>
                    }
                    {/* 여기에 더 많은 사용자 정보를 표시할 수 있음 */}
                </div>

            </Info>




    )
}