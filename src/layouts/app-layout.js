import styled from 'styled-components';
import SideBar from "components/side-bar";
import { SharedImage } from 'constants/image-constant';
import SearchInputDark from 'components/search-input-dark';
import ImageWrapper from 'components/image-wrapper';
import { Bell } from 'react-bootstrap-icons';
import AppPages from 'views/app';

const { Avatar } = SharedImage;

export default function AppLayout () {
    return(
        <>
        <SideBar/>
        <Content>
            <Wrapper>
                <HeaderWrapper>
                    <SearchInputDark/>
                    <ToolWrapper>
                        <IconWrapper>   
                            <Bell/>
                        </IconWrapper>
                        <ImageWrapper src={Avatar} alt="avatar"/>
                    </ToolWrapper> 
                </HeaderWrapper>
                <MainContent>
                    <AppPages/>
                </MainContent>
            </Wrapper>
        </Content>        
        </>
    )
}

const Content = styled.section`
    min-height:100vh;
    background-color:#131129;
    color:white;
    padding-left:80px;
`

const Wrapper = styled.div`
    padding:20px 50px;
`

const HeaderWrapper = styled.header`
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    align-items:center;
    justify-content:space-between;
`

const ToolWrapper = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`

const IconWrapper = styled.div`
    font-size:24px;
    padding-right:20px;
`

const MainContent = styled.div`
    padding-top:50px;
`