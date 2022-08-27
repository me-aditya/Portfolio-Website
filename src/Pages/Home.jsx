import { Box, Grid , useMediaQuery, useTheme, ImageList , ImageListItem, Typography, Button } from '@mui/material';
import React from 'react' ;
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { INTRO_INFO, INTRO_OBJECTIVE } from '../Data/HomeDetails';

// import sign from '../assets/sign.jpeg' ;
// import ProfileImage from '../assets/ProfileImage.jpg' ;

const Home = () => {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
  const direction = mobile ? 'column' : 'row' ;

  return (
    <>
      <Box sx={{
          bgcolor: '#fff',
          p: 2,
          height : '100vh',
          flexGrow: 1 
      }}>
        <Grid container direction= {direction} spacing={2}>
          <Grid item xs={5}>
            <ImageList cols={2} style = {{ gridTemplateColumns: "repeat(1, 1fr)" }} >
              <ImageListItem key= 'profile' style={{ overflowX: "hidden" }} >
                <img
                  src= {'https://avatars.githubusercontent.com/u/59113146?v=4'}
                  srcSet= {'https://avatars.githubusercontent.com/u/59113146?v=4'}
                  // src = {ProfileImage}
                  alt= 'Profile Pic'
                  loading="lazy"
                />
              </ImageListItem>
            </ImageList>
          </Grid>
          <Grid item  xs={7}>
            <Grid container direction= "column" >
              <Grid item >
              <Grid container direction= "row" spacing={2} >
                <Grid item >
                  <Typography variant="h1" >I'M </Typography>
                </Grid>
                <Grid item />
                <Grid item  >
                  <Typography variant="h1" color = "primary.dark"  > ADITYA RATHI  </Typography>
                </Grid>
              </Grid>
            </Grid>
              <Grid item >
                <Typography variant="h3" color = "secondary.light" gutterBottom>Software Engineer</Typography>
                <Typography variant="h5" gutterBottom> {INTRO_INFO} </Typography>
              </Grid>
              <Grid item >
                <Typography variant="h3" color = "primary.light" gutterBottom>Objective</Typography>
                <Typography variant="h5" gutterBottom> {INTRO_OBJECTIVE} </Typography>
                {/* <Typography variant="h6" > Yours Sincerly, </Typography>
                <ImageList>
                  <ImageListItem style = {{height : "100px" , width : "200px"}} >
                    <img src = {sign} alt = 'sign' />
                  </ImageListItem>
                </ImageList> */}
              </Grid>
              <Grid item style={{marginTop : "10px",marginBottom : "10px"}} >
                <Button variant="contained" color = 'error' size="large" target="_blank" href='https://drive.google.com/file/d/163jyaEOIweJ76pSajaYNVxE66DA8X4kN/view?usp=sharing'>
                  <FileDownloadIcon/>
                  <Typography color = 'white' variant = 'h6'>Download resume</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home ;