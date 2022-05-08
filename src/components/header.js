import styled from 'styled-components'
import { Container } from './container'
import { SharedImage } from 'constants/image-constant'
import ImageWrapper from './image-wrapper';
import Menu from './menu';
import ToolBar from './tool-bar';
import MobileMenu from './mobile-menu';
import { Link } from 'react-router-dom';
import { PUBLIC_PREFIX } from 'configs/app-config';

const { Logo } = SharedImage;

const ContainerStyle = {
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    padding:"10px 20px"
}

export default function Header() {
    return (
        <Wrapper>
            <Container style={ContainerStyle}>
                <Link to={PUBLIC_PREFIX}>
                    <ImageWrapper src={Logo} alt="logo" />
                </Link>
                <Menu/>
                <ToolBar/>
            </Container>
            <MobileMenu/>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background-color: white;
    color:black;
    font-size:12px;
`