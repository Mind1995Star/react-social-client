import StatusBar from "components/status-bar";
import Header from "components/header";
import Footer from "components/footer";
import { Switch, Route } from 'react-router-dom';
import { PUBLIC_PREFIX } from "configs/app-config";
import PublicPage from "views/public";
import styled from 'styled-components';

export default function PublicLayout () {
    return(
        <>
        <StatusBar/>
        <Header/>
        <Content>
            <Switch>
                <Route path={PUBLIC_PREFIX}>
                    <PublicPage/>
                </Route>
            </Switch>
        </Content>
        <Footer/>
        </>
    )
}

const Content = styled.section`
    min-height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
`