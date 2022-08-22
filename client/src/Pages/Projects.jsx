import React from 'react' ;
import { Container , Grid , useMediaQuery, useTheme  } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const details = {
  name : 'Flipkart Clone',
  url : 'https://static.businessworld.in/article/article_extra_large_image/1600858456_HulSrV_Flipkart.jpg',
  techStack : [],
  githubLink : ''
} ;

const Projects = () => {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
  const direction = mobile ? "column" : "row" ;

  return (
    <>
      <Container style={{marginTop: '20px'}} alignItems="center">
            <Grid container spacing={3} direction= {direction} alignItems="center">
              <Grid item xs={4}>
                  <ProjectCard props = {details} />
              </Grid>
            </Grid>
      </Container>
    </>
  )
}

export default Projects ;