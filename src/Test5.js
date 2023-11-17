import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

const Test5 = () => {
    const [open, setOpen] =useState(false);
  return (
    <div>
        <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={()=>setOpen(false)} >
            <DialogTitle>This is my Dialog</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    A dialog is a pop up window which can ask user something like an information or conformation
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={()=>setOpen(false)}>Cancel</Button>
                <Button onClick={()=>setOpen(false)}>Agree</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default Test5