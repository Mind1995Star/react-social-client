import Button from 'components/button'
import { Container } from 'components/container'
import { Heading } from 'components/heading'
import ImageWrapper from 'components/image-wrapper'
import Input from 'components/input'
import styled from 'styled-components'
import { SharedImage } from 'constants/image-constant'
import { useState } from 'react'
import { signUp } from 'actions/users'
import { NotificationContainer, NotificationManager } from 'react-notifications';

const ContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    justifyContent: "center",
    padding: "50px 20px"
}

const SignUpButton = {
    marginTop: "50px"
}

const HeadingStyle = {
    color: "#072A48",
    textAlign: "left",
    paddingBottom: "30px"
}

const { Coupon } = SharedImage;

export default function SignUpPage() {
    const [formData, setFormData] = useState({});

    const SignUpUser = async (e) => {
        e.preventDefault();
        const result = await signUp(formData);
        if (result) {
            NotificationManager.success('User is registered', 'Success');
        }
    }

    const setData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <Container style={ContainerStyle}>
            <CouponWrapper>
                <ImageWrapper src={Coupon} alt="coupon" />
            </CouponWrapper>
            <FormWrapper>
                <Heading style={HeadingStyle}>New Account</Heading>
                <Input label="email address" name="email" onChange={(e) => setData(e)} />
                <Input label="password" type='password' name="password" onChange={(e) => setData(e)} />
                <Input label="confirm password" type='password' name="cfpassword" onChange={(e) => setData(e)} />
                <Input label="country" name="country" onChange={(e) => setData(e)} />
                <Input label="firstname" name="firstname" onChange={(e) => setData(e)} />
                <Input label="lastname" name="lastname" onChange={(e) => setData(e)} />
                <Input label="phone number" name="phone" onChange={(e) => setData(e)} />
                <Button text="Sign Up" style={SignUpButton} onClick={(e) => SignUpUser(e)} />
            </FormWrapper>
            <NotificationContainer />
        </Container>
    )
}


const FormWrapper = styled.form`
    max-width:780px;
    flex:1;
    padding-left:100px;
    @media screen and (max-width:960px){
        padding-left:0px;
    }
`

const CouponWrapper = styled.div`
    max-width:100%;
    height:auto;
    flex:1;
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    @media screen and (max-width:960px){
        display:none;
    }
`