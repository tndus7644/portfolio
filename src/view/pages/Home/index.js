import React from 'react'
import styled from 'styled-components';
import Visual from "../../components/Sections/Visual";
import Works from "../../components/Sections/Works";
import Skills from "../../components/Sections/Skills";
import About from "../../components/Sections/About";
import {appActions} from "../../../redux/ActionCreators";
import Footer from "../../components/Footer";

const Home = () => {

    const closeSidebar = () => {
        appActions.updateState({
            sidebar: false
        })
    }
    
    return (
        <Container onClick={closeSidebar}>
            <Visual/>
            <About/>
            <Works/>
            <Skills/>
            <Footer/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;