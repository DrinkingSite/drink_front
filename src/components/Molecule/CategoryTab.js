import TabBtn from "../atoms/TabBtn";
import { styled } from "styled-components";

export const TabForm = styled.div`
    height: 80px;
    border: 1px solid #F4EEFF;
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

`



const CategoryTab = () => {
    return (<>
        <TabForm>
            <TabBtn text={"All"} />
            <TabBtn text={"Beer"} />
            <TabBtn text={"Wine"} />
            <TabBtn text={"Traditional Liquor"} />
        </TabForm>
    </>)
}

export default CategoryTab;