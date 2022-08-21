import React from 'react' ;
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const CertificateCard = ({props}) => { 
  return (
    <>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image= {props.url} 
                alt= { props.alt}
            />
            <CardContent sx={{ minHeight : 200 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.info}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={props.courseLink} target="_blank">Course</Button>
                {
                    (props.certificateLink !== '') && 
                    <Button size="small" href={props.certificateLink} target="_blank">Certificate</Button>
                }
            </CardActions>
        </Card>
    </>
  )
}

export default CertificateCard ;