import React from 'react'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const certificateList = [
  {
    name: '정보처리기사',
    date: '2024.09',
  },
  {
    name: 'sql개발자 (sqld)',
    date: '2023.11',
  },

]

const Certificates = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: 'transform 0.5s ease',
    '&:hover': {
      cursor: 'pointer',
      boxShadow : '0px 0px 3px black',
      transform: 'translateY(10px)'
    }
  }));

  return (
    <div className='certificate-container'>
            <Container>
                <h1 >Certificates</h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {
                            certificateList.map((cert,index)=>(
                                <Item key={index}>
                                  <h2>{cert.name}</h2>
                                  <h3>취득일자 : {cert.date}</h3>
                                </Item>
                            ))
                        }
                        
                    </Grid>
                </Grid>
            </Container>
        </div>
  )
}

export default Certificates