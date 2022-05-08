import styled from 'styled-components';
import { Container } from "components/container";
import { Heading } from "components/heading";
import { SharedImage } from 'constants/image-constant';
import ImageWrapper from 'components/image-wrapper';
import Input from 'components/input';
import Button from 'components/button';

const HeadingStyle = {
    textAlign:"left",
    margin:"0px"
}

const HeadingStyle2 = {
    fontSize:"18px",
    fontWeight:"400"
}

const ContainerStyle = {
    padding:"50px 20px",
    display:"flex",
    flexDirection:"row",
    flexFlow:"wrap"
}

const ButtonStyle = {
    marginTop:"50px"
}

const { Profile } = SharedImage;

export default function ProfilePage () {
    return(
        <Container style={ContainerStyle}>
            <SideBar>
                <Heading style={HeadingStyle}>
                    Settings
                </Heading>
                <SideMenu>
                    <li>Profile Setting</li>
                    <li>Payment Setting</li>
                    <li>Parcels</li>
                    <li>Wallet</li>
                    <li>Favorite</li>
                </SideMenu>
            </SideBar>
            <Content>
                <Heading style={HeadingStyle}>Profile Setting</Heading>
                <ProfileWrapper>
                    <ImageWrapper src={Profile} alt="profile"/>
                    <TextWrapper>
                        <UserInfoText>
                            John Doe
                        </UserInfoText>
                        <UserInfoText style={HeadingStyle2}>
                            goldstardev2002@gmail.com
                        </UserInfoText>
                        <UserInfoText style={HeadingStyle2}>
                            Tokyo, Japan
                        </UserInfoText>
                    </TextWrapper>
                </ProfileWrapper>
                <Input label="Email address"/>
                <Input label="Old Password"/>
                <Input label="New password"/>
                <Input label="Phone Number"/>
                <Button text="Save" style={ButtonStyle}/>
            </Content>
        </Container>
    )
}

const SideBar = styled.aside`
    @media screen and (max-width:800px){
        display:none;
    }
`
const SideMenu = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:20px;
    font-family:Open Sans;
    padding:0px;
    margin:0px;
    padding-top:50px;
`

const Content = styled.section`
    padding-left:100px;
    max-width:100%;
    flex:1;
    @media screen and (max-width:800px){
        padding-left:0px;
    }
`

const ProfileWrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    padding:50px 0px;
    align-items:center;
    @media screen and (max-width:800px) {
        flex-direction:column;
        align-items:center; 
    }
`

const TextWrapper = styled.div`
    padding-left:50px;
    display:flex;
    flex-direction:column;
    gap:20px;
    @media screen and (max-width:800px){
        padding-left:0px;
        padding-top:30px;
    }
`

const UserInfoText = styled.h3`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    text-align: left;
    padding:0px;
    margin:0px;
    padding:0px;
    @media screen and (max-width:800px){
        text-align:center;
    }
`