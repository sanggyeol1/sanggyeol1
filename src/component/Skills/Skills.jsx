import React from 'react'
import './Skills.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { aboutMe } from '../../asset/aboutMe'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Container } from '@mui/material'
import { BackSkillLogos, FrontSkillLogos } from '../SkillLogos/SkillLogos';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const Skills = () => {
  return (
    <div className='skills-main'>
      <h1 id="skills">
        <a href="#skills">
          <FontAwesomeIcon icon={faLink} />
        </a>
        Skills
      </h1>
      <div className='skills-bg'>
        <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              <FrontSkillLogos/>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              <BackSkillLogos/>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>

            </Item>
          </Grid>
        </Grid>
        </Container>
      </div>
    </div>
  )
}

export default Skills