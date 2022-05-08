import styled from 'styled-components';
import { GridFill, Clipboard2Fill, ShareFill, CartFill, PersonCircle, BarChartSteps, GearFill, BoxArrowRight } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';


export default function SideBar () {
    return(
        <Wrapper>
            <MenuList>
                <li>
                    <Link className='nav-link'>
                        <GridFill/>
                    </Link>
                </li>
                <li>
                <Link className='nav-link'>
                    <Clipboard2Fill/>
                </Link>
                </li>
                <li>
                <Link className='nav-link'>
                    <ShareFill/>
                </Link>
                </li>
                <li>
                <Link className='nav-link'>
                    <CartFill/>
                </Link>
                </li>
                <li>
                <Link className='nav-link'>
                    <PersonCircle/>
                </Link>
                </li>
                <li>
                <Link className='nav-link'>
                    <BarChartSteps/>
                </Link>
                </li>
                <li>
                <Link className='nav-link'>
                    <GearFill/>
                </Link>
                </li>
            </MenuList>
            <BoxArrowRight/>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    background-color:#1D1932;
    color:#65646A;
    width:80px;
    position:fixed;
    top:0px;
    bottom:0px;
    font-size:24px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    padding:100px 0px;
`

const MenuList = styled.ul`
    display:flex;
    flex-direction:column;
    padding:0px;
    margin:0px;
    font-size:24px;
    gap:50px;
    li{
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
    }
    .nav-link{
        color:#65646A;
        &:hover{
            color:#6F4FF2;
        }
    }
`