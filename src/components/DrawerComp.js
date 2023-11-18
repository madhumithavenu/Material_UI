import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';


const DrawerComp = (links) => {
    
    const [open, setOpen] = useState(false)
    return (
        <>
            <Drawer PaperProps={{
                sx:{backgroundColor:'rgba(49,49,116,1)'}
            }} open={open} onClose={() => setOpen(false)}>
                <List>
            {links.map((link, index)=>(
                <ListItemButton onClick={()=>setOpen(false)} key={index} divider>
                <ListItemIcon>
                    <ListItemText>
                        {link}
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            ))}
                    
                </List>
            </Drawer>
            <IconButton onClick={()=>setOpen(!open)}>
                <MenuRoundedIcon />
            </IconButton>
        </>
        
    )
}

export default DrawerComp