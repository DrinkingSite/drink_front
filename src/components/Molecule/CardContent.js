import styled from "styled-components"
import CardInform from "../atoms/Card/CardInform"
import { CartButton, DetailButton, StyledCartIcon } from "../atoms/Card/CardButton"
import HashTag from "../atoms/Card/HashTag"
import { Price } from "../atoms/Card/Price"
import Rating from "../atoms/Card/Rating"
import Type from "../atoms/Card/Type"

export const CardContentForm = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CardContentForm2 = styled.div`    
`

export const CardContentForm3 = styled.div`
    display: flex;
    justify-content: space-around;
`

export default function CardContent() {
    return (<>
        <CardContentForm>
            <CardContentForm2>
                <Type type="Beer" />
                <CardInform text="Beck's" />
            </CardContentForm2>
            <Price price="13,900" />

        </CardContentForm>
        <HashTag text={"달콤한"} />
        <HashTag text={"라거"} />
        <HashTag text={"미국"} />

        <Rating rate="4.8" />
        <CardContentForm3>
            <CartButton as="button" />
            <DetailButton text={"자세히 알아보기"} to={"/detail"} />
        </CardContentForm3>
    </>)
}