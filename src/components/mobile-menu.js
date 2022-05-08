import styled from 'styled-components';
import { UpperCase } from 'utilities';
import { Heading } from './heading';


const fontStyle = {
    fontSize:"18px"
}

const MenuStyle = {
    width:"0px",
    padding:"0px"
}

export default function MobileMenu () {
    const Close = () => {
        let obj = document.getElementById('mobile-menu');
        Object.assign(obj.style, MenuStyle);
    }
    return(
        <Wrapper id='mobile-menu'>
            <CloseMenu onClick={Close}>
                &times;
            </CloseMenu>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('homepage')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('shopping agent')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('forwarding')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('logistics')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('bbs')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('business')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('affiliate')
                }
                </Heading>
            </li>
            <li>
                <Heading style={fontStyle}>

                {
                    UpperCase('custome services')
                }
                </Heading>
            </li>
        </Wrapper>
    )   
}


const Wrapper = styled.ul`
    display:none;
    list-style:none;
    position:fixed;
    background-color:white;
    width:0px;
    margin:0px;
    padding:0px;
    top:0px;
    left:0px;
    bottom:0px;
    gap:20px;
    overflow-x:hidden;
    li{
        display:flex;
        padding-left:30px;
    }
    @media screen and (max-width:1320px){
        display:flex;
        flex-direction:column;
    }
    @media screen and (max-width:420px){
        max-width:100% !important;
    }
`

const CloseMenu = styled.div`
    font-size:32px;
    position:absolute;
    top:40px;
    right:60px;
`