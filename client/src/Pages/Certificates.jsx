import { Container , Grid  } from '@mui/material';
import React from 'react' ;
import CertificateCard from '../components/CertificateCard';
import CERTIFICATE_DETAILS from '../Data/CertificateDeatils';


const Certificates = () => {
  return (
    <>
        <Container style={{marginTop: '20px'}}>
            <Grid container spacing={3}>
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