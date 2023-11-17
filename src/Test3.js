import { AppBar, Tab, Tabs, Toolbar } from '@mui/material'
import React, { useState } from 'react'

const Test3 = () => {
    const [value, setValue]= useState();
  return (
    <div>
        <AppBar>
            <Toolbar>
        <Tabs indicatorColor='secondary' textColor='inherit' value={value} onChange={(e, val)=>setValue(val)}>
            <Tab label="First"/>
            <Tab label="Second"/>
            <Tab label="Third"/>
        </Tabs>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Test3