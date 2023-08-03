import styled from "styled-components"
import CardInform from "../atoms/Card/CardInform"
import { Price } from "../atoms/Card/Price"
import Rating from "../atoms/Card/Rating"
import Type from "../atoms/Card/Type"

export const CardForm = styled.div`

`

export default function CardContent() {
    return(<>
    <Type type="Beer"/>
    <CardInform text="Beck's"/>
    <Price price="13,900"/>
    <br />
    {/* <Rating rate="4.8"/> */}
    </>)
}