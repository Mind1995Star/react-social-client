import styled from 'styled-components'
import InputDark from "components/input-dark";
import Button from 'components/button';
import { adminSign } from 'actions/users';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ADMIN_PREFIX } from 'configs/app-config';

const ButtonStyle = {
    backgroundColor: "#6F4FF2",
    width: "100%",
    borderRadius: "15px",
    marginTop: "30px"
}

const TotalWrapper = {
    justifyContent: "space-between"
}

const ForgotPassword = {
    color: "#DC3546"
}

const RememberMe = {
    paddingLeft: "15px"
}

export default function AdminLoginPage() {
    const history = useHistory();
    const [formData, setFormData] = useState({});

    const AdminSign = async (e) => {
        e.preventDefault();
        const data = await adminSign(formData);
        if (data === 1) {
            history.push(ADMIN_PREFIX);
        }
    }

    const setData = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <Wrapper>
            <LoginForm>
                <InputDark label="Username" onChange={(e) => setData(e)} name="username" />
                <InputDark label="PassWord" type='password' name="password" onChange={(e) => setData(e)} />
                <TextWrapper>
                    <Row style={TotalWrapper}>
                        <Row>
                            <input type="checkbox" id="remember-me" name="remeber-me" />
                            <label for="remember-me" style={RememberMe}>
                                Remember Me
                            </label>
                        </Row>
                        <div style={ForgotPassword}>Forgot Password</div>
                    </Row>
                </TextWrapper>
                <Button style={ButtonStyle} onClick={(e) => AdminSign(e)} text="Sign in" />
            </LoginForm>
        </Wrapper>
    )
}


const LoginForm = styled.form`
    max-width:480px;
    width:100%;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    background-color:#131129;
    font-family:Poppins;
`

const TextWrapper = styled.div`
    text-align:center;
    color:#68676E !important;
    padding-top:20px;
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`