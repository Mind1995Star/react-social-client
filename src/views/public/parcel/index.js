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

const { Product } = SharedImage;

const ContainerStyle = {
    paddingBottom: "200px"
}

const MetaStyle = {
    paddingLeft: "10px"
}

export default function ParcelPage () {
    return(
        <Container style={ContainerStyle}>
            <Heading style={HeadingStyle}>
                My Parcels
            </Heading>
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
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
                        EMS
                    </ClientTd>
                    <ClientTd>
                        Shipped
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Confirm & Review' />
                        </ButtonWrapper>
                    </ClientTd>
                </ClientTr>
            </ClientTable>
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