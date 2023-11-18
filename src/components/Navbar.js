import { AppBar, Grid, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
const Navbar = () => {
    const [value, setValue] = useState();
  return (
    <>
    {/* <Grid container>
        <Grid item xs={6} md={12}>Hi</Grid>
        <Grid item xs={6} md={12}>Hi</Grid>
        
    </Grid> */}
    <AppBar>
        <Toolbar>
           <Grid container>
            <Grid item xs={2}>
                <Typography>
                    <ShoppingCartCheckoutIcon />
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab label="Products"/>
                    <Tab label="Overview"/>
                    <Tab label="Pricing"/>
                </Tabs>
            </Grid>
           </Grid>
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar