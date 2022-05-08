import styled from 'styled-components';
import { Container } from "components/container"
import { Heading } from "components/heading";
import { SharedImage } from "constants/image-constant"
import ImageWrapper from 'components/image-wrapper';
import Button from 'components/button';

const { Profile } = SharedImage;

const HeadingStyle = {
    textAlign: "left"
}

export default function AfilliatePage() {
    return (
        <Container>
            <Heading style={HeadingStyle}>Afilliate</Heading>
            <Wrapper>
                <ProfileWrapper>
                    <ImageWrapper src={Profile} alt="profile" />
                    <ProfileMetaWrapper>
                        <Heading style={HeadingStyle}>Gold Star</Heading>
                        <Button text='Bronze Afillate' />
                    </ProfileMetaWrapper>
                </ProfileWrapper>
                <AfillateWrapper>
                    <Heading style={HeadingStyle}>Available Bonus</Heading>
                    <Wrapper className='bonus-wrapper'>
                        <Heading>$378</Heading>
                        <Wrapper>
                            <Heading>Balance Frozen</Heading>
                            <Heading>0.00</Heading>
                        </Wrapper>
                    </Wrapper>
                    <hr />
                    <Wrapper className='bonus-info'>
                        <Wrapper className='bonus-row'>
                            <Heading>Last Bonus Month :</Heading>
                            <Heading>0.00</Heading>
                        </Wrapper>
                        <Wrapper className='bonus-row'>
                            <Heading>Current Bonus Month :</Heading>
                            <Heading>0.00</Heading>
                        </Wrapper>
                    </Wrapper>
                </AfillateWrapper>
            </Wrapper>
            <DesContentWrapper>
            <DesCard>
                <Heading style={HeadingStyle}>What is super buy Afilliate Program ?</Heading>
                <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
            </DesCard>
            <DesCard>
                <Heading style={HeadingStyle}>What is super buy Afilliate Program ?</Heading>
                <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
            </DesCard>
            <DesCard>
                <Heading style={HeadingStyle}>What is super buy Afilliate Program ?</Heading>
                <p>The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier.The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier</p>
            </DesCard>
            </DesContentWrapper>
        </Container>
    )
}

const ProfileWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`
const ProfileMetaWrapper = styled.div`
    padding-left:50px;
`
const AfillateWrapper = styled.div`
    padding-left:50px;
    flex:1;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    .bonus-wrapper{
        gap:50px;
    }
    .bonus-info{
        gap:50px;
    }
    .bonus-row{
        gap:10px;
    }

`

const DesCard = styled.div`
    background-color:#EEF2F5;
    padding:20px;

`

const DesContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    gap:30px;
    padding:100px 20px;
`