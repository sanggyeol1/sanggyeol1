import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import './Projects.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import SlideCard from '../SlideCard/SlideCard'
import { Button } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    transition: 'transform 0.5s ease',
    marginTop: '200px',
    borderRadius: '20px',

    // '&:hover': {
    //     cursor: 'pointer',
    //     boxShadow: '0px 0px 3px black',
    // }
}));


const projects = [
    {
        title: "캠핑어때",
        date: "2024.04 ~ 2024.05",
        content: "한국관광공사 api를 이용한 캠핑정보사이트. \n 에자일의 스크럼 방법론으로 진행한 팀 프로젝트입니다. 검색결과 페이지와 캠핑장 카드를 구현하였고 키워드 검색기능, 상세검색기능, \n태그로검색하기 기능을 구현하였습니다.",
        team: "한도희, 정아림, 김예진, 한상결, 곽선아",
        stack: "react, redux, react-query, mui",
        img: ["../../asset/gocampingBanner.png", "b", "c"],
        gitLink: "https://github.com/alim-ui-developer/react-study-team-project",
        siteLink:"https://how-about-camping.netlify.app/",
    },
    {
        title: "TwosomeClass",
        date: "2024.06~07",
        content: "node.js 스터디 팀프로젝트 \n 클래스 101, 탈잉 등과 같은 강의영상 공유 서비스 입니다. \n 백엔드 api와 어드민 페이지를 담당하였습니다.",
        team: "한상결, 박영호, 박샘, 정민희",
        stack: "react, node.js, mongodb, mongoose",
        img: ["a", "b", "c"],
        gitLink: "https://github.com/koalnu3",
        siteLink:"https://main--twosome-class.netlify.app/",
    },
    {
        title: "한상갤러리",
        date: "2023.12",
        content: "첫 개인프로젝트인 게시판 프로젝트.\n node.js 와 express로 서버를 구축하고 ejs로 데이터바인딩하여 만들었습니다.\n CRUD기능을 이용하여 게시판 및 댓글기능, 프로필사진 기능을 만들었고 Rest Api를 적용하려고 노력했습니다.",
        team: "개인프로젝트",
        stack: "node.js, ejs, mongodb",
        img: ["a", "b", "c"],
        gitLink: "https://github.com/sanggyeol1/Node.js_Express/tree/origin/forum2",
        siteLink:"http://sanggalary-env.eba-mr5axyph.ap-northeast-2.elasticbeanstalk.com/",
    },
    {
        title: "넷플릭스 영화추천",
        date: "2024.04",
        content: "tmdb에서 받은 api를 활용하여 만든 영화 소개 사이트.",
        team: "개인프로젝트",
        stack: "react, react-query, bootstrap",
        img: ["a", "b", "c"],
        gitLink: "https://github.com/sanggyeol1/React-projects/tree/master/noonaProject/netflix-demo",
        siteLink:"https://6646e5e447e65662d29881b9--singular-dasik-1815ce.netlify.app/",
    },
    {
        title: "SoccerKit",
        date: "2024.06",
        content: "react + node.js를 활용한 축구 유니폼 쇼핑몰입니다. \n 어드민 페이지와 판매자 페이지를 구현하며 level에 따른 권한설정을 달리하였습니다. \n 또한 redux를 적용하여 상태관리를 하였습니다.",
        team: "개인프로젝트",
        stack: "react, redux, node.js, mongodb, mongoose",
        img: ["a", "b", "c"],
        gitLink: "https://github.com/sanggyeol1/shopping-mall-project-fe",
        siteLink:"https://master--remarkable-brigadeiros-15eeb1.netlify.app/",
    },
    {
        title: "Algorithm view",
        date: "2024.05",
        content: "react를 활용한 알고리즘 시각화 서비스. \n 이해하기 어려운 알고리즘들을 쉽게 이해하기 위해 만들었습니다.",
        team: "개인프로젝트",
        stack: "react, bootstrap",
        img: ["a", "b", "c"],
        gitLink: "https://github.com/sanggyeol1/ALVI",
        siteLink:"https://algorithm-view-sanggyeol.netlify.app/",
    },
    {
        title: "한상결 포트폴리오",
        date: "2024.05 ~",
        content: "react를 활용한 간단한 포트폴리오입니다. \n 저의 프로젝트들을 간단하고 편하게 볼 수 있도록 만들었습니다.",
        team: "개인프로젝트",
        stack: "react, mui",
        img: ["a", "b", "c"],
        gitLink: "https://github.com/sanggyeol1/sanggyeol1",
        siteLink:"https://delightful-nasturtium-354683.netlify.app/",
    },
]

const Projects = () => {

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.project-item');
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible');
                } else {
                    el.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='projects-container'>
            <Container>
                <h1 id="my-projects">
                    <a href="#my-projects">
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                    My projects
                </h1>


                {
                    projects.map((project) => (
                        <Item className='project-item'>

                            <div>
                                <Grid container>
                                    <Grid item xs={12} md={7} className='slide-box'>
                                        <SlideCard imageList={project.img} />
                                    </Grid>
                                    <Grid item xs={12} md={5}>
                                        <div className='project-content'>
                                            <h1>{project.title}</h1>
                                            <div>제작일자 : {project.date}</div>
                                            <div>사용 : {project.stack}</div>
                                            <div>{project.team == '개인프로젝트' ? project.team : `Team : ${project.team}`} </div>


                                            <p>{project.content.split('\n').map((line, index) => (
                                                <React.Fragment key={index}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                            </p>

                                            <Button onClick={()=> { window.location.href = project.gitLink }} variant="outlined" sx={{ borderColor: '#47A248', color: '#47A248', '&:hover': { background: '#47A248', borderColor: '#47A248', color: 'white' } }}>
                                                Github
                                            </Button>
                                            <Button onClick={()=> { window.location.href = project.siteLink }} variant="outlined" sx={{ borderColor: '#47A248', color: '#47A248', '&:hover': { background: '#47A248', borderColor: '#47A248', color: 'white' } }}>
                                                Site
                                            </Button>

                                        </div>
                                    </Grid>

                                </Grid>

                            </div>
                        </Item>
                    ))
                }



            </Container>
        </div>
    )
}

export default Projects