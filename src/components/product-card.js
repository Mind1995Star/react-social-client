import styled from 'styled-components';
import { SharedImage } from 'constants/image-constant';
import ImageWrapper from './image-wrapper';
import { Heading } from './heading';
import Button from './button';

const { Product } = SharedImage;

const MoneyColor = {
    backgroundColor: "#20C55D"
}

const AddToCart = {
    backgroundColor: "#02BEE4"
}


export default function ProductCard({button = null}) {
    return (
        <CardWrapper>
            <ProductWrapper>
                <ImageWrapper src={Product} alt="product" />
            </ProductWrapper>
            <ContentWrapper>
                <Heading>Solor Panel</Heading>
                <TextWrapper>
                    800W 12V/24V Monocrystalline Solar Premium Kit w/Rover 60A Charger Controller (back-order)
                </TextWrapper>
                {
                    button !== null ? (
                        <ButtonWrapper>
                    <Button text="$2400" style={MoneyColor} />
                    <Button text="Add to Cart" style={AddToCart} />
                </ButtonWrapper>
                    ) : null
                }
            </ContentWrapper>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    box-shadow: 0px 41px 27px -27px rgba(116, 155, 169, 0.59);
    max-width:370px;
    border: 1px solid #D6D5D5;
`

const ProductWrapper = styled.div`
    max-width:390px;
    height:auto;
`

const TextWrapper = styled.p`
    text-align:center;
`
const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    flex-flow:wrap;
    gap:30px;
    padding-top:30px;
`

const ContentWrapper = styled.div`
    padding:20px;
`