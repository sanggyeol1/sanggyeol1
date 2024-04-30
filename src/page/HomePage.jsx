import React from 'react'
import Banner from '../component/Banner/Banner'
import { Container } from '@mui/material'
import AboutMe from '../component/AboutMe/AboutMe'
import Footer from '../component/Footer/Footer'
import Skills from '../component/Skills/Skills'
import Projects from '../component/Projects/Projects'


const HomePage = () => {
    return (

        <div>
            <Banner />
            <AboutMe />
            <Skills />
            <Projects />
            <Footer />
        </div>
    )
}

export default HomePage