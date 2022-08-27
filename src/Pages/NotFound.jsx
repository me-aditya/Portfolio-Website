import { Grid, ImageList, ImageListItem , useMediaQuery, useTheme } from '@mui/material';
import React from 'react'

const NotFound = () => {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;

  return (
    <>
        <Grid
          container
          spacing={0}
          direction= 'row'
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <ImageList cols={1} gap={8}>
              <ImageListItem key= 'error' style={{ overflowX: "hidden" }} >
                {
                  mobile ? 
                  <img
                    src= {'https://static.vecteezy.com/system/resources/previews/002/027/502/original/404-error-website-page-illustration-man-with-error-page-views-the-mobile-application-vector.jpg'}
                    srcSet= {'https://static.vecteezy.com/system/resources/previews/002/027/502/original/404-error-website-page-illustration-man-with-error-page-views-the-mobile-application-vector.jpg'}
                    alt= 'Error 404'
                    loading="lazy"
                  /> :
                  <img
                    src= {'https://www.makewebeasy.com/th/blog/wp-content/uploads/2019/12/cover.png'}
                    srcSet= {'https://www.makewebeasy.com/th/blog/wp-content/uploads/2019/12/cover.png'}
                    alt= 'Error 404'
                    loading="lazy"
                  />
                }
              </ImageListItem>
            </ImageList>
          </Grid>
        </Grid>
    </>
  )
}

export default NotFound ;