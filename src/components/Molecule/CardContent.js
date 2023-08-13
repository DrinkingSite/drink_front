import styled from "styled-components"
import CardInform from "../atoms/Card/CardInform"
import { CartButton, DetailButton, StyledCartIcon } from "../atoms/Card/CardButton"
import HashTag from "../atoms/Card/HashTag"
import { Price } from "../atoms/Card/Price"
import Rating from "../atoms/Card/Rating"
import Type from "../atoms/Card/Type"
import ReviewText from "../atoms/Card/ReviewText"

export const BetweenForm = styled.div`
    display: flex;
    justify-content: space-between;
`

export const AroundForm = styled.div`
    display: flex;
    justify-content: space-around;
`

export const FlexForm = styled.div`
    display: flex;
`

export default function CardContent() {
    return (<>
        <BetweenForm>
            <div>
                <Type type="Beer" />
                <CardInform text="Beck's" />
            </div>
            <Price price="13,900" />
        </BetweenForm>
        <HashTag text={"달콤한"} />
        <HashTag text={"라거"} />
        <HashTag text={"미국"} />
        <FlexForm>
        <Rating rate="4.8" />
        <ReviewText text={"141"} />
        </FlexForm>
        <AroundForm>
            <CartButton as="button" />
            <DetailButton text={"자세히 알아보기"} to={"/detail"} />
        </AroundForm>
    </>)
}