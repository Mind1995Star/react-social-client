import styled from 'styled-components';
import { UpperCase } from 'utilities';
import { Container } from './container';
import { Heading } from './heading';
import { Text } from './text';
import { Discord, Twitter, Youtube, Instagram, Facebook } from 'react-bootstrap-icons';

const HeadingFont = {
    fontSize: "18px",
    textAlign: "left"
}

const ContainerStyle = {
    padding: "50px 20px"
}

export default function Footer() {
    return (
        <Wrapper>
            <Container style={ContainerStyle}>
                <MainWrapper>
                    <ContentWrapper>
                        <MenuWrapper>
                            <li>
                                <Heading style={HeadingFont}>
                                    {
                                        UpperCase('Customer Service')
                                    }
                                </Heading>
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>Contact us</li>
                            <li>Expert Service</li>
                            <li>Business</li>
                        </MenuWrapper>
                        <MenuWrapper>
                            <li>
                                <Heading style={HeadingFont}>
                                    {
                                        UpperCase('shopping agent')
                                    }
                                </Heading>
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>Contact us</li>
                            <li>Expert Service</li>
                            <li>Business</li>
                        </MenuWrapper>
                        <MenuWrapper>
                            <li>
                                <Heading style={HeadingFont}>
                                    {
                                        UpperCase('Payment')
                                    }
                                </Heading>
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>Contact us</li>
                            <li>Expert Service</li>
                            <li>Business</li>
                        </MenuWrapper>
                        <MenuWrapper>
                            <li>
                                <Heading style={HeadingFont}>
                                    {
                                        UpperCase('Delivery')
                                    }
                                </Heading>
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>Contact us</li>
                            <li>Expert Service</li>
                            <li>Business</li>
                        </MenuWrapper>
                        <MenuWrapper>
                            <li>
                                <Heading style={HeadingFont}>
                                    {
                                        UpperCase('After sale services')
                                    }
                                </Heading>
                            </li>
                            <li>
                                Help Center
                            </li>
                            <li>Contact us</li>
                            <li>Expert Service</li>
                            <li>Business</li>
                        </MenuWrapper>
                    </ContentWrapper>
                    <ConnectWrapper>
                        <Heading style={HeadingFont}>
                            {
                                UpperCase('Connect with us')
                            }
                        </Heading>
                        <SocialWrapper>
                            <li>
                                <Facebook />
                            </li>
                            <li>
                                <Youtube />
                            </li>
                            <li>
                                <Twitter />
                            </li>
                            <li>
                                <Instagram />
                            </li>
                            <li>
                                <Discord />
                            </li>
                        </SocialWrapper>
                    </ConnectWrapper>
                </MainWrapper>
                <Splitter />
                <PolicyWrapper>
                    <Text>
                        © 2022 Home Science Tools   All Rights Reserved
                    </Text>
                    <PolicyList>
                        <li>
                            Terms & Privacy
                        </li>
                        <li>
                            Accessiblity Statement
                        </li>
                    </PolicyList>
                </PolicyWrapper>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-color:#072A48;
    color:white;
`
const MenuWrapper = styled.ul`
    display:flex;
    flex-direction:column;
    list-style:none;
    padding:0px;
    margin:0px;
    font-family:Open Sans;
    font-size:12px;
    gap:10px;
    max-width:fit-content;
`
const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    gap:80px;
    flex:1;
`

const ConnectWrapper = styled.div`
    @media screen and (max-width:1430px) {
        padding-top:50px;
    }
`

const MainWrapper = styled.div`
    display:flex;
    flex-direction:row;
    @media screen and (max-width:1430px) {
        flex-direction: column;
    }
`

const Splitter = styled.hr`
    margin-top:50px;
    margin-bottom:50px;
`
const PolicyWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    font-size:12px;
    font-family:Open Sans;
`
const PolicyList = styled.ul`
    display:flex;
    flex-direction:row;
    list-style:none;
    padding:0px;
    margin:0px;
    gap:30px;
    flex-flow:wrap;
`
const SocialWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    list-style:none;
    padding:0px;
    margin:0px;
    font-size:32px;
    gap:30px;
    padding-top:15px !important;
`