import React from 'react' ;
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Grid, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import { AMAZON, ELECTRONO } from '../Data/ExperienceDetails';

const Experience = () => {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;
  const heading = mobile ? 'h6' : 'h3' ; 
  const title = mobile ? 'inherit' : 'h4' ;
  const description = mobile ? 'subtitle2' : 'h6' ;

  return (
    <>
      <Grid container
          spacing={0}
          direction= 'row'
          alignItems="center"
          justifyContent="center"
      >
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Grid>
                <Grid item>
                <Container>
                    <Typography variant = {heading} color= '#E91E63'> {AMAZON.name} </Typography>
                    <Typography variant = {title} color = '#FF4081'>{AMAZON.title}</Typography>
                    <Typography variant = {description} color= 'secondary.light'>{AMAZON.description1}</Typography>
                    <Typography variant = {description} color= 'secondary.light'>{AMAZON.description2}</Typography>
                    <Typography variant = {description} color= 'secondary.light'>{AMAZON.description3}</Typography>
                  </Container>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
            </TimelineSeparator>
            <TimelineContent>
              <Grid>
                <Grid item >
                  <Container>
                    <Typography variant = {heading} color= '#388E3C'>{ELECTRONO.name}</Typography>
                    <Typography variant = {title} color='#7CB342'>{ELECTRONO.title}</Typography>
                    <Typography variant = {description} color= '#00897B'>{ELECTRONO.description1}</Typography>
                    <Typography variant = {description} color= '#00897B'>{ELECTRONO.description2}</Typography>
                  </Container>
                </Grid>
              </Grid>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Grid>
      
    </>
  )
}

export default Experience ;