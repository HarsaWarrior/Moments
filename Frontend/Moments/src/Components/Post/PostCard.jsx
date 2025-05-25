import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import ChatIcon from '@mui/icons-material/Chat';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../Redux/Post/post.action';

function PostCard({item}) {
    const [showComment, setShowComment] = React.useState(false);
    const dispatch = useDispatch();
    const {post} = useSelector(store => store)

    const handleCreateComment = (content) => {
        const reqData = {
            postId : item.id,
            data:{
                content
            }
        }
        dispatch(createComment(reqData))
    };

    const handlePostLike=()=>{
    dispatch(likePost(item?.id))
    }

    const handleSavePost=()=>{
        dispatch(savePost(item?.id))
    }

    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleIcon = () => {
        setLiked(!liked);
    };

    const handleSave = () => {
        setSaved(!saved);
    };

    const handleShowComment = () => setShowComment(!showComment);

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
            title={item.user.firstName + " " + item.user.lastName}
            subheader={"@" +item.user.firstName.toLowerCase() +"_" +item.user.lastName.toLowerCase()
        }
        />
        <CardMedia
            component="img"
            height="194"
            image={item.image}
            alt={item.caption}
        />
        <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item?.caption}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className='flex justify-between'>
            <div>
                <IconButton onClick={handleIcon}>
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
                <IconButton onClick={handleShowComment}>
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
        {showComment && (
        <section>
          <div className="flex items-center space-x-5 mx-3 my-5">
            <Avatar sx={{bgcolor:"#212534",color:"rgb(88,199,250)"}}/>
            <input
              onKeyPress={(e) => {
                console.log("e", e.target.value);
                if (e.key === "Enter") {
                  console.log("--------");
                  handleCreateComment(e.target.value);
                }
              }}
              className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2"
              type="text"
              placeholder="write your comment..."
            />
          </div>
          <Divider />
          <div className="mx-3 space-y-2 my-5 text-xs">
            {post.comments?.map((comment) => (
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-5">
                  <Avatar
                    sx={{ height: "2rem", width: "2rem", fontSize: ".8rem",bgcolor:"#212534",color:"rgb(88,199,250)" }}
                  >
                    {comment.user.firstName[0]}
                  </Avatar>
                  <p>{comment.content}</p>
                </div>
                <div>
                  <IconButton color="primary">
                    <FavoriteBorderIcon sx={{ fontSize: "1rem" }} />
                  </IconButton>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </Card>
  )
}

export default PostCard