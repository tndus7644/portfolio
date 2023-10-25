import React from 'react'
import styled from 'styled-components';
import {GlobalStyle} from "../styled/Reset.Styled";
import Header from "./components/Header";
import Routes from "./routes/Routes";
import BackTop from "./components/Button/BackTop";
import Sidebar from "./components/Sidebar";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Header/>
            <Sidebar/>
            <Routes/>
            <BackTop/>
        </Container>
    )
}

const Container = styled.div`
  
`;

export default App;