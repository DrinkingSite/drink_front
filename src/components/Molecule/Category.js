import CategoryIcon from "../../assets/category.png"
import styled from "styled-components";



export const Catecontainer =styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  position: relative;
  justify-content: center;
  margin:15px;
`
const CategoryImage = styled.img`
  
  width: 35px; /* 로고의 가로 크기 설정 */
  height: auto;
`;
const CategoryTxt = styled.div`
  margin-right: 40px;
  font-size: 36px;
  cursor: pointer;

`;

export default function Category(){
    const categories = [
        {name: '전체 카테고리'},
        {name: '전체상품'},
        {name: '베스트'},
        {name: '신메뉴'},
        {name: '이벤트'}

    ]
    return(
        <Catecontainer>
            <CategoryImage src={CategoryIcon}/>
                {categories.map((category, index) => (
                    <CategoryTxt key={index}>
                        {category.name}
                    </CategoryTxt>
                ))}
        </Catecontainer>

    )
}