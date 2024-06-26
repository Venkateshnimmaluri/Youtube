import React from 'react'
import video from "../../Components/Video/video.mp4"
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';
function WatchHistory() {

  const historyList = useSelector(state=>state.HistoryReducer)
  // const history = [
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
  // ];
  return (

    <WHL page={"History"} videoList={historyList}/>
  )
}

export default WatchHistory
