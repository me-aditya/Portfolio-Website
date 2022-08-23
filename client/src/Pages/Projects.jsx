import React from 'react' ;
import { Container , Grid , useMediaQuery, useTheme  } from '@mui/material';
import ProjectCard from '../components/ProjectCard';

const details = {
  name : 'Flipkart Clone',
  url : 'https://static.businessworld.in/article/article_extra_large_image/1600858456_HulSrV_Flipkart.jpg',
  techStack : [
    {url : 'https://www.svgrepo.com/show/331488/mongodb.svg' , alt : 'MongoDB'}, 
    {url : 'https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png' , alt : 'NodeJS'},
    {url : 'https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png' , alt : 'ExpressJS'},
    {url : 'https://img.icons8.com/color/480/firebase.png' , alt : 'Firebase'},
    {url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' , alt : 'ReactJS'},
    {url : 'https://ih1.redbubble.net/image.2488655049.9084/st,small,507x507-pad,600x600,f8f8f8.jpg' , alt : 'Flask'},
    {url : 'https://iconarchive.com/download/i73027/cornmanthe3rd/plex/Other-python.ico' , alt : 'Python'},
    {url : 'https://www.kindpng.com/picc/m/67-678384_transparent-javascript-icon-png-png-download.png' , alt : 'Javascript'},
    {url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png' , alt : 'Tenserflow'},
    {url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/PyTorch_logo_icon.svg/1200px-PyTorch_logo_icon.svg.png' , alt : 'Pytorch'},
    {url : 'https://user-images.githubusercontent.com/51419598/152648731-567997ec-ac1c-4a9c-a816-a1fb1882abbe.png' , alt : 'Flutter'},
    {url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kotlin_Icon.svg/2048px-Kotlin_Icon.svg.png' , alt : 'Kotlin'},
    {url : 'https://cdn-icons-png.flaticon.com/512/226/226777.png' , alt : 'Java'},
    {url : 'https://cdn-icons-png.flaticon.com/512/6091/6091352.png' , alt : 'IoT'},
  ],
  githubLink : '',
  certificateLink : '',
  tags : ['Web Development','Flutter','Machine Learning','Deep Learning'] 
} ;

const details2 = {
  name : 'Crown Clothing',
  url : 'https://www.crownclothing.in/wp-content/uploads/2021/11/CrownClothing_Logo_V1.png',
  techStack : [
    {url : 'https://www.svgrepo.com/show/331488/mongodb.svg' , alt : 'MongoDB'}, 
    {url : 'https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png' , alt : 'NodeJS'}
  ],
  githubLink : '',
  certificateLink : '',
  tags : ['Web Development']
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
              </Grid>\
              <Grid item xs={4}>
                  <ProjectCard props = {details2} />
              </Grid>
            </Grid>
      </Container>
    </>
  )
}

export default Projects ;