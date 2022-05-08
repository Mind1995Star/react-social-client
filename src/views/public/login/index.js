import styled from 'styled-components';
import Input from "components/input";
import { Container } from 'components/container';
import { Heading } from 'components/heading';
import Button from 'components/button';
import { Link } from 'react-router-dom';
import { PUBLIC_PREFIX, SIGNUP_PREFIX } from 'configs/app-config';
import { useState } from 'react';
import { signIn } from 'actions/users';
import { signed } from 'store/actions/actions';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';


const HeadingStyle = {
    color: "#072A48",
    fontWeight: "800",
    fontSize: "40px",
    margin: "0px",
    paddingBottom: "30px"
}

const LoginButton = {
    marginTop: "50px"
}

function LoginPage(props) {
    const history = useHistory();
    const [formData, setFormData] = useState({});

    const setData = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const toSignIn = async (e) => {
        e.preventDefault();
        const result = await signIn(formData);
        if(result){
            props.userSigned();
            history.push('/');
        }
    }

    return (
        <Container>
            <ContentWrapper>
                <FormWrapper>
                    <Input label="Email address" name="email" onChange={e => setData(e)} />
                    <Input label="Password" type='password' name="password" onChange={e => setData(e)}/>
                    <Row>
                        <span>
                            Forgot password
                        </span>
                        <Link to={PUBLIC_PREFIX + SIGNUP_PREFIX}>
                            Sign up
                        </Link>
                    </Row>
                    <Button text="Login" style={LoginButton} onClick={e => toSignIn(e)} />
                </FormWrapper>
                <Wrapper>
                    <Heading style={HeadingStyle}>
                        New Customer ?
                    </Heading>
                    <NoteList>
                        <li>Become a member of KGHYPE</li>
                        <li>Check out faster</li>
                        <li>Access your order history</li>
                        <li>Track new orders</li>
                    </NoteList>
                </Wrapper>
            </ContentWrapper>
        </Container>
    )
}


const mapStateToProps = state => {
    return{
        user__state: state.userState.user__state
    }
}

const mapDispatchToProps = dispatch => {
    return {
      userSigned: () => dispatch(signed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)


const FormWrapper = styled.form`
    max-width:500px;
    flex:1;
    @media screen and (max-width:760px) {
        width:100%;
        max-width:100%;
    }
`

const Row = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    padding-top:20px;
`

const NoteList = styled.ul`
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:0px;
    margin:0px;
    list-style:none;
    font-size:18px;
    font-family:Open Sans;
`
const Wrapper = styled.div`
    padding-left:100px;
    @media screen and (max-width:760px) {
        padding-left:0px;
        padding-top:50px;
    }
`

const ContentWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    flex-flow:wrap;
    padding:50px 20px;
    justify-content:center;
    @media screen and (max-width:760px) {
        flex-direction:column !important;
    }
`