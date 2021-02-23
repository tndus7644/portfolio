import React from 'react'
import styled from 'styled-components';
import Visual from "../../components/Sections/Visual";
import Works from "../../components/Sections/Works";
import Skills from "../../components/Sections/Skills";
import About from "../../components/Sections/About";

const Home = () => {
    
    return (
        <Container>
            <Visual/>
            <About/>
            <Works/>
            <Skills/>
        </Container>
    )
}


const Container = styled.div`
    
`;

export default Home;