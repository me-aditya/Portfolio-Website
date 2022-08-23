import React, { useState } from 'react' ;
import {AppBar, Box, IconButton, Tab, Tabs, Toolbar, useMediaQuery, useTheme} from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppDrawer from './AppDrawer';
import { Link } from 'react-router-dom';

function Header() {

    const [tab, setTab] = useState('/');
    const theme = useTheme() ;

    const mobile = useMediaQuery(theme.breakpoints.down('md')) ;

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
      };

  return (
    <AppBar position='sticky'>
        <Toolbar>
            {
                mobile && <AppDrawer/>
            }
            <IconButton value = '/' component = {Link} to = {'/'} >
                <HomeOutlinedIcon color = 'white' />
            </IconButton>
            { !mobile &&
                <Box sx={{ width: '100%' }}>
                    <Tabs 
                    textColor = 'inherit' 
                    value = {tab} 
                    onChange={ handleTabChange }
                    centered
                    >
                        <Tab label = 'Experience' value = '/experience' component = {Link} to = {'/experience'} />
                        <Tab label = 'Projects' value = 'projects' component = {Link} to = {'/projects'} />
                        <Tab label = 'Education' value = 'education' component = {Link} to = {'/education'} />
                        <Tab label = 'Certifications' value = 'certificates' component = {Link} to = {'/certificates'} />
                        <Tab label = 'Profiles' value = 'profiles' component = {Link} to = {'/profiles'} />
                    </Tabs>
                </Box>
            }
            
        </Toolbar>
        
    </AppBar>
  )
}

export default Header