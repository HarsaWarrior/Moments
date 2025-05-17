import { Avatar, Button, Card, CardHeader, IconButton } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react'

const PopularUserCard = () => {
  return (
    <div>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
                <Button size='small'>
                    Follow
                </Button>
            }
            title="Moments User"
            subheader="@Username"
        />
    </div>
  )
}

export default PopularUserCard