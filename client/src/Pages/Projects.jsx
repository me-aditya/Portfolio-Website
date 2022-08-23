import React from 'react' ;
import { Container , Grid , useMediaQuery, useTheme  } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import PROJECT_DATA from '../Data/ProjectDetails';

const Projects = () => {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
  const direction = mobile ? "column" : "row" ;

  return (
    <>
      <Container style={{marginTop: '20px'}} alignItems="center">
            <Grid container spacing={3} direction= {direction} alignItems="center">
              {
                PROJECT_DATA.map((details,index) => {
                  return (
                    <>
                      <Grid item xs={4}>
                        <ProjectCard props = {details} />
                      </Grid>
                    </>
                  )
                })
              }
            </Grid>
      </Container>
    </>
  )
}

export default Projects ;