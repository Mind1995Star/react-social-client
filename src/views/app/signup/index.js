import { useState } from 'react';
import InputDark from 'components/input-dark';
import styled from 'styled-components';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import { ADMIN_PREFIX, LOGIN_PREFIX } from 'configs/app-config';

const ButtonStyle = {
    backgroundColor: "#6F4FF2",
    width: "100%",
    borderRadius: "15px",
    marginTop: "30px"
}

export default function AdminSignUp () {
    const [formData, setFormData] = useState({});

    const setData = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value} )
    }
    return(
        <Wrapper>
                <Form>
                    <InputDark label='Email' name='email' onChange={(e) => setData(e)} />
                    <InputDark label='Password' type='password' name='password' onChange={(e) => setData(e)}/>
                    <InputDark label='Confirm Password' type='password' name='confirm password' onChange={(e) => setData(e)}/>
                    <InputDark label='Firstname' name='firstname' onChange={(e) => setData(e)}/>
                    <InputDark label='Lastname' name='lastname' onChange={(e) => setData(e)}/>
                    <InputDark label='Phone number' name='phone' onChange={(e) => setData(e)}/>
                    <Button style={ButtonStyle} text="Sign up"/>
                    <Row>
                        Already have an account?
                        <Link to={ADMIN_PREFIX + LOGIN_PREFIX}>Sign in</Link>
                    </Row>
                </Form>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:#131129;
    min-height:100vh;
    color:white;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
`

const Form = styled.form`
    max-width:450px;
    width:100%;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding-top:30px;
    font-family:Poppins;
    color:#68676E !important;
`