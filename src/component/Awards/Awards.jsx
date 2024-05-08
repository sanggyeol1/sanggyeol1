import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const awardsList = [
  {
    name : "AI Challenge For Biodiversity",
    grade : "장려상",
    org : "마이크로소프트 ∙ SK하이닉스 ∙ (재)숲과나눔",
    date : "2024.01"
  },
  // {
  //   name : "2024 관광데이터 활용 공모전",
  //   grade : "우수상",
  //   org : "한국관광공사 ∙ Kakao",
  //   date : "2024.11"
  // },
]



const Awards = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: 'transform 0.5s ease',
    boxShadow : '0px 0px 3px black',
    '&:hover': {
      cursor: 'pointer',
      transform: 'translateY(5px)'
    }
  }));

  return (
    <div className='awards-container'>
            <Container>
                <h1 >Awards</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {
                            awardsList.map((award,index)=>(
                                <Item key={index}>
                                  <h2>{award.name}</h2>
                                  <h3>{award.org}</h3>
                                  <h3>{award.grade}, {award.date}</h3>
                                </Item>
                            ))
                        }
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
  )
}

export default Awards