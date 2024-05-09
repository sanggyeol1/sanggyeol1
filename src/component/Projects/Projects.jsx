import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import './Projects.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SlideCard from '../SlideCard/SlideCard'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: 'transform 0.5s ease',
    margin: '10px',
    '&:hover': {
        cursor: 'pointer',
        boxShadow: '0px 0px 3px black',
    }
}));


const projects = [
    {
        title: "캠핑어때",
        date: "2024.04.14 ~ 2024.04.19",
        content: "한국관광공사 api를 이용한 고캠핑 클론사이트",
        team: "한도희, 정아림, 김예진, 한상결, 곽선아",
        explane: "",
        stack: "react, redux, react-query",
        img: ["../../asset/gocampingBanner.png", "b", "c"],
        link: "",
    },
    {
        title: "한상갤",
        date: "2024.04.14 ~ 2024.04.19",
        content: "node.js, express를 사용한 게시판",
        team: "개인프로젝트",
        explane: "",
        stack: "",
        img: ["a", "b", "c"],
        link: "",
    },
    {
        title: "넷플릭스 클론코딩",
        date: "2024.04.14 ~ 2024.04.19",
        content: "tmdb에서 받은 api를 활용하여 만든 영화 소개 사이트",
        team: "개인프로젝트",
        explane: "",
        stack: "",
        img: ["a", "b", "c"],
        link: "",
    },
    {
        title: "H&M 클론코딩",
        date: "2024.04.14 ~ 2024.04.19",
        content: "json server를 활용하여 만든 쇼핑몰 사이트",
        team: "개인프로젝트",
        explane: "",
        stack: "",
        img: ["a", "b", "c"],
        link: "",
    },
    {
        title: "HSG's Portfolio",
        date: "2024.04.14 ~ 2024.04.19",
        content: "react를 활용한 포트폴리오",
        team: "개인프로젝트",
        explane: "",
        stack: "",
        img: ["a", "b", "c"],
        link: "",
    },
    // {
    //     title: "집중스터디카페 암사점",
    //     date: "2024.04.14 ~ 2024.04.19",
    //     content: "가업으로 운영하는 스터디카페 홈페이지",
    //     team: "개인프로젝트",
    //     explane: "",
    //     stack: "",
    //     img: ["a","b","c"],
    //     link: "",
    // },
]

const Projects = () => {
    return (
        <div className='projects-container'>
            <Container>
                <h1 id="my-projects">
                    <a href="my-projects">
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                    My projects
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        {
                            projects.map((project) => (
                                <Item className='project-item'>
                                    <h2>{project.title}</h2>
                                    <SlideCard imageList={project.img} />
                                    <div>{project.date}</div>
                                    <div>{project.content}</div>
                                </Item>
                            ))
                        }
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
}

export default Projects