import React from 'react' ;
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import PROFILES from '../Data/ProfileDetails';
import { Container } from '@mui/system';


const Profiles = () => {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
  const direction = mobile ? 'row' : 'column' ;
  const displayColumn = mobile ? 1 : 3 ;

  return (
    <>
    <Container>
      <Grid
        container
        spacing={0}
        direction= {direction}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <ImageList  variant="masnory" cols={displayColumn} gap={8} >
            { PROFILES.map((item) => (
              <Button target= "_blank" href = {item.url}>
                <ImageListItem key={item.img} style={{ overflowX: "hidden" }} >
                    <img
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                  </ImageListItem>
                </Button>
              ))}
            </ImageList>
          </Grid>   
        </Grid> 
      </Container>
    </>
  )
}

export default Profiles ;