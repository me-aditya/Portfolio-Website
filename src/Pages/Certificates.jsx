import { Container , Grid , useMediaQuery, useTheme  } from '@mui/material';
import React from 'react' ;
import CertificateCard from '../components/CertificateCard';
import CERTIFICATE_DETAILS from '../Data/CertificateDeatils';

const Certificates = () => {

    const theme = useTheme() ;
    const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
    const direction = mobile ? "column" : "row" ;

  return (
    <>
        <Container style={{marginTop: '20px'}} alignItems="center">
            <Grid container spacing={3} direction= {direction} alignItems="center">
                { CERTIFICATE_DETAILS.map( (details,index) => {
                    return (
                        <Grid item xs={4}>
                            <CertificateCard props = {details} />
                        </Grid>
                    ) ;
                })
                }
            </Grid>
        </Container>
    </>
  )
}

export default Certificates ;