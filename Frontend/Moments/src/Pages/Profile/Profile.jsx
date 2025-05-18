import { Avatar, Box, Button, Card, Tab, Tabs } from '@mui/material'
import PostCard from '../../Components/Post/PostCard'
import React, { useState } from 'react'
import UserReelCard from '../../Components/Reels/UserReelCard'
import { useSelector } from 'react-redux'
import ProfileModal from './ProfileModal'

const Profile = () => {

  const [open, setOpen] = useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const tabs = [
    {value:"post", name:"Posts"},
    {value:"reels", name:"Reels"},
    {value:"saved", name:"Saved"},
    {value:"repost", name:"Repost"}
  ]
  const posts = [1,1,1,1,1]
  const reels = [1,1,1,1,1]
  const savedPosts = [1,1,1,1,1]
  const {auth} = useSelector(store=>store)
  const [value, setValue] = React.useState('post');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card className='my-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>
          <img className='w-full h-full rounded-t-md' src="https://cdn.pixabay.com/photo/2022/01/28/18/32/leaves-6975462_1280.png" alt="" />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>
          <Avatar className='transform -translate-y-24' sx={{width:"10rem", height:"10rem"}} src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          {true? (<Button onClick = {handleOpenProfileModal} sx = {{borderRadius:"20px"}} variant='outlined'>Edit Profile</Button>):(<Button variant='outlined'>Follow</Button>)}
        </div>
        <div className='p-5'>
          <div>
            <h1 className='py-1 font-bold text-xl'>{auth.user?.firstName + " " + auth.user?.lastName}</h1>
            <p>@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
          </div>
          <div className='flex gap-5 items-center py-3'>
            <span>41 Posts</span>
            <span>35 Followers</span>
            <span>15 Followings</span>
          </div>
          <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <section>
          <Box sx={{ width: '100%', borderBottom: 1}}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item, index) => <Tab key={index} value={item.value} label={item.name} wrapped />)}
            </Tabs>
          </Box>
          <div className='flex justify-center'>
            {value === "post"? (<div className='space-y-5 w-[70%] my-10'>
              {posts.map((item, index) => (<div key={index} className='border border-slate-100 rounded-md'>
                <PostCard />
              </div>))}
            </div>): value === "reels"? (<div className='flex justify-center flex-wrap gap-2 my-10'>
              {reels.map((item, index) => (<UserReelCard />))}
            </div>) : value === "saved"? (<div className='space-y-5 w-[70%] my-10'>
              {posts.map((item, index) => (<div className='border border-slate-100 rounded-md'>
                <PostCard />
              </div>))}
            </div>) :(<div>
              Repost
            </div>)}
          </div>
        </section>
      </div>
      <section>
        <ProfileModal open = {open} handleClose={handleClose} />
      </section>
    </Card>
  )
}

export default Profile