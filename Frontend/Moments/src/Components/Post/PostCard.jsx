import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState } from 'react'

function PostCard() {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleIcon = () => {
        setLiked(!liked);
    };

    const handleSave = () => {
        setSaved(!saved);
    };

  return (
    <Card>
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVertIcon />
            </IconButton>
            }
            title="Moments User"
            subheader="@Username"
        />
        <CardMedia
            component="img"
            height="194"
            image="https://cdn.pixabay.com/photo/2017/12/16/22/22/bora-bora-3023437_1280.jpg"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </CardContent>
        <CardActions disableSpacing className='flex justify-between'>
            <div>
                <IconButton onClick={handleIcon}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon />
                </IconButton>
            </div>
            <div>
                <IconButton onClick={handleSave}>
                    {saved ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                </IconButton>
            </div>
        </CardActions>
    </Card>
  )
}

export default PostCard