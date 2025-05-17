import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import { Avatar, Button, Card, Divider, Menu, MenuItem } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';


function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Card className='card h-screen flex flex-col justify-between py-5'>
      <div className='space-y-8 pl-5'>
        <div>
          <span className='logo font-bold text-xl'>Moments</span>
        </div>
        <div className='space-y-8'>
          {navigationMenu.map((item) => (<div key={item.id} className='cursor-pointer'>
            {item.icon}
            <p className='text-xl'>{item.title}</p>
          </div>))}
        </div>
      </div>
      <div>
        <Divider />
        <div className='pl-5 flex items-center justify-between pt-5'>
          <div className='flex items-center space-x-3'>
            <Avatar />
            <div>
              <p className='font-bold'>Moments User</p>
              <p className='opacity-70'>@Username</p>
            </div>
          </div>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreVertIcon />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Sidebar