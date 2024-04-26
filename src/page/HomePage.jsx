import React from 'react'
import Banner from '../component/Banner/Banner'
import { Container } from '@mui/material'
import AboutMe from '../component/AboutMe/AboutMe'
import Footer from '../component/Footer/Footer'
import Skills from '../component/Skills/Skills'


const HomePage = () => {
    return (
       
            <div>
                <Banner />
                 <Container>
                    <AboutMe/>
                    <Skills/>
                </Container>
                <Footer/>
            </div>
    )
}

export default HomePage