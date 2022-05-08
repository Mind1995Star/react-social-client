import Button from 'components/button'
import { Container } from 'components/container'
import { Heading } from 'components/heading'
import Input from 'components/input'
import Link from 'components/link'
import styled from 'styled-components'

const HeadingStyle = {
    textAlign: "left"
}

const ContainerStyle = {
    display:"flex",
    flexDirection:"column",
    gap:"50px",
    paddingTop:"100px",
    paddingBottom:"100px"
}

const WrapperStyle = {
    marginTop:"50px"
}

const TextStyle = {
    paddingLeft:"30px"
}

const MetaRow = {
    gap:"30px",
    justifyContent:"flex-end"
}

export default function ManualProductSubmissionPage() {
    return (
        <Container style={ContainerStyle}>
            <Row>
                <ReviewForm>
                    <Heading style={HeadingStyle}>Product Information</Heading>
                    <Input label="Link" />
                    <Input label="Name" />
                    <Input label="Remark" />
                </ReviewForm>
                <TextWrapper>
                    <Heading style={HeadingStyle}>Disclaimer</Heading>
                    <p>These items are sold by third parties. KGHYPE does not sell products directly and serves as a chineese shopping agent.</p>
                </TextWrapper>
            </Row>
            <Row>
                <ReviewForm>
                    <Heading style={HeadingStyle}>Fees</Heading>
                    <Input label="Prodcut Price" />
                    <Input label="Warehouse" />
                    <TextWrapper style={WrapperStyle}>
                        <Heading style={HeadingStyle}>Total :</Heading>
                    </TextWrapper>
                </ReviewForm>
                <TextWrapper>
                    <Heading style={HeadingStyle}>Fee Standards</Heading>
                    <p>These items are sold by third parties. KGHYPE does not sell products directly and serves as a chineese shopping agent.</p>
                </TextWrapper>
            </Row>
            <TextWrapper>
                <Heading style={HeadingStyle}>Others</Heading>
                <Row className='upload-row'>
                    <Button text="Upload File"/>
                    <p style={TextStyle}>Size limit for single picture is 1M - 2M</p>
                </Row>
            </TextWrapper>
            <Row style={MetaRow}>
                <Link text='Buy Now'/>
                <Button text='Add to Cart'/>
            </Row>
        </Container>
    )
}

const ReviewForm = styled.div`
    max-width:880px;
    width:100%;
    padding-right:50px;
`
const TextWrapper = styled.div`
    background-color:#EEF2F5;
    padding:30px;
    #price-board{
        margin-top:30px;
    }
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
`