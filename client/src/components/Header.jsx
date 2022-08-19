import React, { useState } from 'react' ;
import {AppBar, Tab, Tabs, Toolbar} from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function Header() {

    const [tab, setTab] = useState('0');

    const handleTabChange = (event, newValue) => {
        setTab(newValue);
      };

  return (
    <AppBar>
        <Toolbar>
            <HomeOutlinedIcon/>
            <Tabs 
                textColor = 'inherit' 
                value = {tab} 
                onChange={ handleTabChange }
            >
                <Tab label = 'About and Skils' value = '0' />
                <Tab label = 'Projects' value = '1' />
                <Tab label = 'Education' value = '2' />
                <Tab label = 'Certifications' value = '4' />
                <Tab label = 'Profiles' value = '3' />
            </Tabs>
        </Toolbar>
        
    </AppBar>
  )
}

export default Header