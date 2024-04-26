import React from 'react'
import './AboutMe.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { aboutMe } from '../../asset/aboutMe'
import { faLink } from '@fortawesome/free-solid-svg-icons'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const AboutMe = () => {
    return (
        <div className='about-me-main'>
            <h2 id="about-me">
                <a href="#about-me">
                    <FontAwesomeIcon icon={faLink} />
                </a>
                About Me
            </h2>



            <Grid container spacing={2}>
                {
                    aboutMe.map((aboutMe) => (
                        <Grid item xs={12} md={6} lg={4}>
                            <Item className='about-me-items'>
                                <FontAwesomeIcon className='about-me-icon' icon={aboutMe.iconName} />
                                <div>{aboutMe.theme}</div>
                                <div>{aboutMe.content}</div>
                            </Item>
                        </Grid>
                    ))
                }



            </Grid>
        </div>
    )
}

export default AboutMe