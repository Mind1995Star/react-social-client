import Button from "components/button";
import { Heading } from "components/heading";
import ImageWrapper from "components/image-wrapper";
import InputDark from "components/input-dark";
import { SharedImage } from "constants/image-constant"
import styled from 'styled-components'

const { Profile } = SharedImage;

const HeadingStyle = {
    textAlign: "left"
}

const SaveStyle = {
    backgroundColor:"#6F4FF2",
    borderRadius:"15px"
}

const CancelStyle = {
    backgroundColor:"#DC3546",
    borderRadius:"15px"
}

export default function AdminProfile() {
    return (
        <>
            <Heading style={HeadingStyle}>Profile Setting</Heading>
            <Wrapper>
                <ImageWrapper src={Profile} alt="Profile"/>
                <ProfileInfo>
                    <InputDark label="Username"/>
                    <InputDark label="Firstname"/>
                    <InputDark label="Lastname"/>
                    <InputDark label="Email"/>
                    <InputDark label="Password"/>
                    <InputDark label="Confirm Password"/>
                    <ButtonWrapper>
                        <Button style={SaveStyle} text="Save"/>
                        <Button style={CancelStyle} text="Cancel"/>
                    </ButtonWrapper>
                </ProfileInfo>
            </Wrapper>
        </>
    )
}



const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    padding-top:50px;
    align-items:flex-start;
    @media screen and (max-width:810px){
        flex-direction:column;
        align-items:center;
    }
`
const ProfileInfo = styled.div`
    width:100%;
    flex:1;
    padding-left:50px;
    @media screen and (max-width:810px){
        padding-left:0px;
        padding-top:50px;
    }
`
const ButtonWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    gap:30px;
    padding-top:50px;
`