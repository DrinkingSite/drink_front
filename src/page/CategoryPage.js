import CategoryTemplate from "../components/template/CategoryTemplate";
import axios from "axios";
import CategoryHeader from "../components/organism/CategoryHeader";


export default function CategoryPage(){
    // const BACKEND_URL = "http://192.168.50.4:8082/hello";

    // const hello = 0;

    // axios.get(`${BACKEND_URL}`)
    // .then((response) => {
    //     alert("helloooo");
    // })
    return(<>
        <CategoryHeader />

        <CategoryTemplate />
        {/* {hello} */}
    </>
    )
}