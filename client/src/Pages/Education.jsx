import React from 'react' ;
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
            <TimelineDot color="secondary" sx={{ width: 50, height: 50 }}>
                <SchoolIcon sx={{ width: 50, height: 50 }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color="secondary">
              { BITSPilani.name }
            </Typography>
            <Typography variant="h6" color="secondary"> {BITSPilani.type} </Typography>
            <Typography variant="subtitle1" color="secondary"> {BITSPilani.location} </Typography>
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
            <TimelineDot color="primary" sx={{ width: 50, height: 50 }}>
                <ApartmentIcon sx={{ width: 50, height: 50 }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color="primary">
              { VibrantAcademy.name}
            </Typography>
            <Typography variant="h6" color="primary">{VibrantAcademy.type}</Typography>
            <Typography variant="subtitle1" color="primary"> {VibrantAcademy.location} </Typography>
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
          <TimelineDot color="secondary" sx={{ width: 50, height: 50 }}>
                <HomeWorkIcon sx={{ width: 50, height: 50 }}/>
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }} >
          <Typography variant="h5" component="span" color="secondary">
            {ResonanceEduventures.name}
          </Typography>
          <Typography variant="h6" color="secondary">{ResonanceEduventures.type}</Typography>
          <Typography variant="subtitle1" color="secondary"> {ResonanceEduventures.location} </Typography>
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
            <TimelineDot color="primary" sx={{ width: 50, height: 50 }}>
                <LocationCityIcon sx={{ width: 50, height: 50 }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color = 'primary'>
              {StPaulJuniorCollege.name}
            </Typography>
            <Typography variant="h6" color = 'primary'>{StPaulJuniorCollege.type}</Typography>
            <Typography variant="subtitle1" color = 'primary'> {StPaulJuniorCollege.location} </Typography>
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
            <TimelineDot color = "secondary" sx={{ width: 50, height: 50 }} >
                <AccountBalanceIcon sx={{ width: 50, height: 50 }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color = 'secondary'>
              {SchoolOfScholars.name}
            </Typography>
            <Typography variant="h6" color = 'secondary'> {SchoolOfScholars.type}</Typography>
            <Typography variant="subtitle1" color = 'secondary'> {SchoolOfScholars.location} </Typography>
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
            <TimelineDot color="primary" sx={{ width: 50, height: 50 }}>
                <MeetingRoomIcon sx={{ width: 50, height: 50 }}/>
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h5" component="span" color = 'primary.main'>
              {AgaragamiKindergarten.name}
            </Typography>
            <Typography variant="h6" color = 'primary.main'>{AgaragamiKindergarten.type}</Typography>
            <Typography variant="subtitle1" color = 'primary.main'> {AgaragamiKindergarten.location} </Typography>
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
              <TimelineDot color="secondary" sx={{ width: 50, height: 50 }}>
                  <FoundationIcon sx={{ width: 50, height: 50 }}/>
              </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }} color = 'secondary.main'>
            <Typography variant="h5" component="span">
              {StAnthonyNationalSchool.name}
            </Typography>
            <Typography variant="h6" color = 'secondary.main'>{StAnthonyNationalSchool.type}</Typography>
            <Typography variant="subtitle1"> {StAnthonyNationalSchool.location} </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </>
  )
}

export default Education ;