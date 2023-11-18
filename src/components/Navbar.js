import { AppBar, Button, Grid, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import DrawerComp from './DrawerComp';
// import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@mui/system"

// import { useTheme } from '@emotion/react';
const Navbar = ({links}) => {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    console.log(isMatch);
    const [value, setValue] = useState();
  return (
    <>
    {/* <Grid container>
        <Grid item xs={6} md={12}>Hi</Grid>
        <Grid item xs={6} md={12}>Hi</Grid>
        
    </Grid> */}
    <AppBar sx={{backgroundImage:' linear-gradient(90deg, rgba(180,58,58,1) 2%, rgba(49,49,116,1) 36%, rgba(105,0,161,1) 73%, rgba(166,69,252,1) 100%);'}}>
        <Toolbar>
           { isMatch ? (<>
           <Typography>
            <ShoppingCartCheckoutIcon/>
           </Typography>
            <DrawerComp links={links}/>
           </>): (<Grid xs={{placeItems:'center'}} container>
            <Grid item xs={2}>
                <Typography>
                    <ShoppingCartCheckoutIcon />
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                    {links.map((link,index)=>(
                        <Tab key={index} label={link}/>
                    ))}
                </Tabs>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={3}>
                <Box display="flex">
                    <Button sx={{marginLeft:'auto',background:'rgba(180,58,58,1)'}} variant='contained'>Login</Button>
                    <Button sx={{marginLeft:1 , background:'rgba(180,58,58,1)'}} variant='contained'>Signup</Button>
                </Box>
            </Grid>
           </Grid>)}
          
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar