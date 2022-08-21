import React from 'react' ;
import { Button, Card, CardActions, CardContent, CardMedia, Grid, ImageList, ImageListItem, Typography} from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

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
                <Grid style= {{marginTop : '15px'}} container spacing={0}>
                    <Grid item xs={1.5}>
                        <AccountBalanceIcon/>
                    </Grid>
                    <Grid item >
                        <Typography variant="string" color="caption">
                            Certifying Authority : 
                        </Typography>
                    </Grid>
                    { props.courseWebsiteIcon &&
                        <Grid>
                        <ImageList variant="masonry" cols={3} gap={25}>
                            { props.courseWebsiteIcon.map((item,index) => (
                                <ImageListItem key={item}>
                                <img
                                    src= { item}
                                    srcSet={item}
                                    alt= {index}
                                    loading="lazy"
                                    height= '50px'
                                    width= '50px'
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    }
                </Grid>
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