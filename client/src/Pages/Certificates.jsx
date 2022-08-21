import { Container , Grid , useMediaQuery, useTheme  } from '@mui/material';
import React from 'react' ;
import CertificateCard from '../components/CertificateCard';
import CERTIFICATE_DETAILS from '../Data/CertificateDeatils';

const Certificates = () => {

    const theme = useTheme() ;
    const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
    const spacingVal = mobile ? 7 : 4 ;

  return (
    <>
        <Container style={{marginTop: '20px'}} alignItems="center">
            <Grid container spacing={3} direction="row" alignItems="center">
                { CERTIFICATE_DETAILS.map( (details,index) => {
                    return (
                        <Grid item xs={spacingVal}>
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