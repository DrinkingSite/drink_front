import CategoryTab from "../Molecule/CategoryTab";
import { styled } from "styled-components";
import Dropdown from "../atoms/Dropdown";



const CategoryHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  background: #ffffff;
  width: 84%;
  height: 68px;
  margin: 3% 0 1% 8%;
`;

export default function CategoryHeader() {
    // 탭
    return(<>
    <CategoryHead>
    <CategoryTab />
    {/* 별점높은순 / 리뷰많은순 / 판매순 */}
    <Dropdown />
    </CategoryHead>
    </>)
}