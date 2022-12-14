import React from 'react' ;
import {Grid, useMediaQuery, useTheme  } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import FoundationIcon from '@mui/icons-material/Foundation';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';

import { 
  AgaragamiKindergarten, 
  BITSPilani, 
  ResonanceEduventures, 
  SchoolOfScholars, 
  StAnthonyNationalSchool, 
  StPaulJuniorCollege, 
  VibrantAcademy
} from '../Data/EducationDetails' ;

function Education() {

  const theme = useTheme() ;
  const mobile = useMediaQuery(theme.breakpoints.down('md')) ;

  const imgSize = mobile ? 25 : 50 ;
  const textSizeHeading = mobile ? 'text.secondary' : 'h5' ;
  const textSize = mobile? 'text.secondary' : 'h6' ;

  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {BITSPilani.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary" sx={{ width: imgSize, height: imgSize }}>
                <SchoolIcon sx={{ width: imgSize, height: imgSize }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container direction= "column">
              <Typography variant={textSizeHeading} component="span" color="#FF1744">
                { BITSPilani.name }
              </Typography>
              <Typography variant={textSize} color="#FF1744"> {BITSPilani.type} </Typography>
              <Typography variant="subtitle1" color="#FF1744"> {BITSPilani.location} </Typography>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {VibrantAcademy.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary" sx={{ width: imgSize, height: imgSize }}>
                <ApartmentIcon sx={{ width: imgSize, height: imgSize }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container spacing={3} direction= "column">
              <Typography variant={textSizeHeading} component="span" color="#81C784">
                { VibrantAcademy.name}
              </Typography>
              <Typography variant={textSize} color="#81C784">{VibrantAcademy.type}</Typography>
              <Typography variant="subtitle1" color="#81C784"> {VibrantAcademy.location} </Typography>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {ResonanceEduventures.year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary" sx={{ width: imgSize, height: imgSize }}>
                <HomeWorkIcon sx={{ width: imgSize, height: imgSize }}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} >
          <Typography variant={textSizeHeading} component="span" color="#2E7D32">
            {ResonanceEduventures.name}
          </Typography>
          <Typography variant={textSize} color="#2E7D32"> {'\n'}  {ResonanceEduventures.type}</Typography>
          <Typography variant="subtitle1" color="#2E7D32"> {'\n'} {ResonanceEduventures.location} </Typography>
        </TimelineContent>
      </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {StPaulJuniorCollege.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary" sx={{ width: imgSize, height: imgSize }}>
                <LocationCityIcon sx={{ width: imgSize, height: imgSize }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container  direction= "column">
              <Typography variant={textSizeHeading} component="span" color = '#757575'>
                {StPaulJuniorCollege.name}
              </Typography>
              <Typography variant={textSize} color = '#757575'>{StPaulJuniorCollege.type}</Typography>
              <Typography variant="subtitle1" color = '#757575'> {StPaulJuniorCollege.location} </Typography>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            {SchoolOfScholars.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
            <TimelineDot color = "secondary" sx={{ width: imgSize, height: imgSize }} >
                <AccountBalanceIcon sx={{ width: imgSize, height: imgSize }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Grid container direction= "column">
              <Typography variant={textSizeHeading} component="span" color = '#FFD600'>
                {SchoolOfScholars.name}
              </Typography>
              <Typography variant={textSize} color = '#FFD600'> {SchoolOfScholars.type}</Typography>
              <Typography variant="subtitle1" color = '#FFD600'> {SchoolOfScholars.location} </Typography>
            </Grid>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
        <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            {AgaragamiKindergarten.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
            <TimelineDot color="primary" sx={{ width: imgSize, height: imgSize }}>
                <MeetingRoomIcon sx={{ width: imgSize, height: imgSize }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant={textSizeHeading} component="span" color = '#795548'>
              {AgaragamiKindergarten.name}
            </Typography>
            <Typography variant={textSize} color = '#795548'> {'\n'} {AgaragamiKindergarten.type}</Typography>
            <Typography variant="subtitle1" color = '#795548'> {'\n'} {AgaragamiKindergarten.location} </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
          >
            {StAnthonyNationalSchool.year}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              <TimelineDot color="secondary" sx={{ width: imgSize, height: imgSize }}>
                  <FoundationIcon sx={{ width: imgSize, height: imgSize }}/>
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }} color = 'secondary.main'>
            <Grid container direction= "column">
              <Typography variant={textSizeHeading} component="span" color = 'secondary.dark'>
                {StAnthonyNationalSchool.name}
              </Typography>
              <Typography variant={textSize} color = 'secondary.dark' component="span"> {StAnthonyNationalSchool.type}</Typography>
              <Typography variant="subtitle1" color = 'secondary.dark'> {StAnthonyNationalSchool.location} </Typography>
            </Grid>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )
}

export default Education ;