import styled from 'styled-components';
import { ClientTable, ClientTd, ClientTh, ClientTr } from "components/client-table";
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


export default function WareHousePage() {
    return (
        <Container style={ContainerStyle}>
            <Heading style={HeadingStyle}>
                My Warehouse
            </Heading>
            <ClientTable>
                <ClientTr>
                    <ClientTh>Item Name</ClientTh>
                    <ClientTh>Quantity</ClientTh>
                    <ClientTh>Weight</ClientTh>
                    <ClientTh>Size</ClientTh>
                    <ClientTh>Mail Restriction</ClientTh>
                    <ClientTh>Edit</ClientTh>
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
                        1
                    </ClientTd>
                    <ClientTd>
                        1021
                    </ClientTd>
                    <ClientTd>
                        23
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Purchase' />
                            <Button text='Inspection' />
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
                        1
                    </ClientTd>
                    <ClientTd>
                        1021
                    </ClientTd>
                    <ClientTd>
                        23
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Purchase' />
                            <Button text='Inspection' />
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
                        1
                    </ClientTd>
                    <ClientTd>
                        1021
                    </ClientTd>
                    <ClientTd>
                        23
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Purchase' />
                            <Button text='Inspection' />
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
                        1
                    </ClientTd>
                    <ClientTd>
                        1021
                    </ClientTd>
                    <ClientTd>
                        23
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Purchase' />
                            <Button text='Inspection' />
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
                        1
                    </ClientTd>
                    <ClientTd>
                        1021
                    </ClientTd>
                    <ClientTd>
                        23
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Purchase' />
                            <Button text='Inspection' />
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
                        1
                    </ClientTd>
                    <ClientTd>
                        1021
                    </ClientTd>
                    <ClientTd>
                        23
                    </ClientTd>
                    <ClientTd>
                        Brand/CD
                    </ClientTd>
                    <ClientTd>
                        <ButtonWrapper>
                            <Button text='Purchase' />
                            <Button text='Inspection' />
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