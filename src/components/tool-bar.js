import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SharedImage } from '../constants/image-constant';
import ImageWrapper from './image-wrapper';
import { List } from 'react-bootstrap-icons';
import { PUBLIC_PREFIX, LOGIN_PREFIX } from 'configs/app-config';
import { connect } from "react-redux";
import { useEffect, useState } from 'react';

const { UserIcon, CartIcon, SearchIcon, Profile } = SharedImage;

const MenuStyle = {
    width: "350px",
    paddingTop: "90px"
}

function ToolBar(props) {
    const {user__state} = props;
    const [state, setState] = useState(0);
    useEffect(() => {
        setState(user__state);
    }, [user__state])

    const ShowMenu = () => {
        let obj = document.getElementById('mobile-menu');
        Object.assign(obj.style, MenuStyle);
    }

    return (
        <Wrapper>
            <ToolWrapper>
                <li>
                    <ImageWrapper src={SearchIcon} alt="search-icon" />
                </li>
                <li>
                    {
                        state ? <ProfileWrapper>
                            <ImageWrapper src={Profile} alt="profile"/>
                        </ProfileWrapper> : 
                        <Link to={PUBLIC_PREFIX + LOGIN_PREFIX}>
                            <ImageWrapper src={UserIcon} alt="search-icon" />
                        </Link>
                    }
                </li>
                <li>
                    <ImageWrapper src={CartIcon} alt="search-icon" />
                </li>
            </ToolWrapper>
            <IconWrapper onClick={ShowMenu}>
                <List />
            </IconWrapper>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        user__state: state.userState.user__state
    }
}

export default connect(mapStateToProps)(ToolBar)

const ToolWrapper = styled.ul`
    display:flex;
    flex-direction:row;
    align-items:center;
    list-style:none;
    gap:20px;
    font-size:20px;
    li{
        display:flex;
        flex-direction:row;
        align-items:center;
        height:100%;
    }
    @media screen and (max-width:600px){
        display:none;
    }
`
const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    font-size:20px;
`
const IconWrapper = styled.div`
    padding-left:20px;
    display:none;
    @media screen and (max-width:1320px){
        display:block;
    }
`

const ProfileWrapper = styled.div`
    max-width:30px;
    height:auto;
`