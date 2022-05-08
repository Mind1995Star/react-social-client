import styled from 'styled-components';
import { Container } from "components/container"
import { Heading } from "components/heading"
import Input from "components/input"
import { IconImage } from 'constants/image-constant';
import ImageWrapper from 'components/image-wrapper';

const HeadingStyle = {
    textAlign: "left"
}

const ContainerStyle = {
    paddingTop:"50px"
}

const SearchHeading = {
    color:"#72727E",
    maxWidth:"630px",
    paddingTop:"50px"
}

const { SearchProduct } = IconImage;

export default function ShippingCalculator() {
    return (
        <Container style={ContainerStyle}>
            <Heading style={HeadingStyle}>Shipping Calculator</Heading>
            <ContentWrapper>
                <SearchForm>
                    <Input label='Destimation' />
                    <Input label='warehouse' />
                    <Input label='weight' />
                    <Input label='size' />
                    <Input label='length' />
                    <Input label='width' />
                    <Input label='height' />
                    <Input label='item category' />
                </SearchForm>
                <ResultWrapper>
                    <ImageWrapper src={SearchProduct} alt="product"/>
                    <Heading style={SearchHeading}>Please fill in the relevant boxes to quote your shipping fee</Heading>
                </ResultWrapper>
            </ContentWrapper>
        </Container>
    )
}


const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    padding-top:30px;
    padding-bottom:200px;
`

const SearchForm = styled.form`
    width:100%;
    max-width:450px;
`

const ResultWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    flex:1;
`