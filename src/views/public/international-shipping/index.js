import styled from 'styled-components';
import { ClientTable, ClientTd, ClientTr } from "components/client-table";
import { Container } from "components/container";
import { Heading } from "components/heading";
import ImageWrapper from "components/image-wrapper";
import { SharedImage } from "constants/image-constant";
import Button from 'components/button';

const HeadingStyle = {
    textAlign: "left",
    paddingLeft: "20px"
}

const HeadingStyle2 = {
    textAlign:"left"
}

const { Product } = SharedImage;

const ContainerStyle = {
    paddingBottom: "200px"
}

const MetaStyle = {
    paddingLeft: "10px"
}

const MetaHeading = {
    fontSize:"20px",
    color:"#3E433F"
}

const ButtonStyle = {
    width:"100%"
}

export default function InternationalShippingPage () {
    return(
        <Container style={ContainerStyle}>
            <Heading style={HeadingStyle}>
                Submit Delivery Order
            </Heading>
            <ContentWrapper>
                <ClientTable>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                    <ClientTr>
                        <ClientTd>
                            <Wrapper>
                                <ProductWrapper>
                                    <ImageWrapper src={Product} alt="product" />
                                </ProductWrapper>
                                Cowhide SportsShoe 2022 new edition
                            </Wrapper>
                        </ClientTd>
                        <ClientTd>
                            $450
                        </ClientTd>
                        <ClientTd>
                            2 - 5 working days
                        </ClientTd>
                        <ClientTd>
                            <ButtonWrapper>
                                <Button text='Select' />
                            </ButtonWrapper>
                        </ClientTd>
                    </ClientTr>
                </ClientTable>
                <TextWrapper>
                    <Heading style={HeadingStyle2}>Transaction</Heading>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Estimated Shipping Fee</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>VAT</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Value Added Service</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Premium</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <Heading style={HeadingStyle2}>Shipping Discount</Heading>

                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>VIP Discount</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Promotion Discount</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Coupons</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Credit</Heading>
                        <Heading style={MetaHeading}>0.00</Heading>
                    </MetaInfoWrapper>
                    <hr/>
                    <MetaInfoWrapper>
                        <Heading style={MetaHeading}>Shipping Free Deposit</Heading>
                        <Heading>$236</Heading>
                    </MetaInfoWrapper>
                    <Button text='Submit Delivery Order' style={ButtonStyle} />
                </TextWrapper>
            </ContentWrapper>
            <Wrapper>
                <Button text='Submit' />
                <MetaWrapper>
                    <Wrapper>
                        Selected :
                        <Heading style={MetaStyle}>
                            12
                        </Heading>
                    </Wrapper>
                    <Wrapper>Total :    <Heading style={MetaStyle}>
                        $430
                    </Heading></Wrapper>
                </MetaWrapper>
            </Wrapper>
        </Container>
    )
}


const ProductWrapper = styled.div`
    max-width:150px;
    padding-right:20px;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

const MetaWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:30px;
    padding-left:20px;
`

const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:10px;
`

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
`

const TextWrapper = styled.div`
    padding-left:50px;
    max-width:350px;
    width:100%;
`

const MetaInfoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`