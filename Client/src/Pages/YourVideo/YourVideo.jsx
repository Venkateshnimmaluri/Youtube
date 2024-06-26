import React, { useState } from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
//import video from '../../Components/Video/video.mp4'
import './YourVideo.css'
import { useSelector } from 'react-redux'
function YourVideo() {

  const vids =useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChannel === CurrentUser?.result?._id).reverse();

  const CurrentUser = useSelector((state)=>state?.currentUserReducer)

  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: video ,
  //     Chanel:"656gfde45g5y6hy66e332d45",
  //     title:"video 1",
  //     Uploader: "abc",
  //     description:"description of video 1"
  //   },
  //   {
  //     _id: 2,
  //     video_src: video ,
  //     Chanel:"656gfde45g5y6hy66e3243fa",
  //     title:"video 2",
  //     Uploader: "abc",
  //     description:"description of video 2"
  //   },
  //   {
  //     _id: 3,
  //     video_src: video ,
  //     Chanel:"656gfde45g5y6hy66ewe5tgre3",
  //     title:"video 3",
  //     Uploader: "abc",
  //     description:"description of video 3"
  //   },
  //   {
  //   _id: 4,
  //   video_src: video ,
  //   Chanel:"656gfde45g5y6hy66ewe5tgre3",
  //   title:"video 4",
  //   Uploader: "abc",
  //   description:"description of video 4"
  //   }

  // ]
  return (
    <div className='container_Pages_App'>
    <LeftSidebar/>
    <div className="container2_Pages_App">
      <div className="container_yourvideo">
      <h1> Your Video</h1>
      {
        CurrentUser ? (<>
        <ShowVideoGrid vids={vids}/>
        </> ):<>
        <h3>Please Login to see Your Uploaded Video List</h3></>
      }
      </div>
      

    </div>
 
</div>
  )
}

export default YourVideo
