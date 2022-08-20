import React, { useState } from 'react' ;
import {AppBar, Box, Tab, Tabs, Toolbar, useMediaQuery, useTheme} from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AppDrawer from './AppDrawer';

function Header() {

    const [tab, setTab] = useState('0');
    const theme = useTheme() ;

    const mobile = useMediaQuery(theme.breakpoints.down('md')) ;

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
      };

  return (
    <AppBar>
        <Toolbar>
            {
                mobile && <AppDrawer/>
            }
            <HomeOutlinedIcon/>
            { !mobile &&
                <Box sx={{ width: '100%' }}>
                    <Tabs 
                    textColor = 'inherit' 
                    value = {tab} 
                    onChange={ handleTabChange }
                    centered
                    >
                        <Tab label = 'About and Skils' value = '0' />
                        <Tab label = 'Projects' value = '1' />
                        <Tab label = 'Education' value = '2' />
                        <Tab label = 'Certifications' value = '4' />
                        <Tab label = 'Profiles' value = '3' />
                    </Tabs>
                </Box>
            }
            
        </Toolbar>
        
    </AppBar>
  )
}

export default Header