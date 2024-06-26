import React from 'react'
//import video from '../../Components/Video/video.mp4'
import ShowVideo from '../ShowVideo/ShowVideo'
import { useSelector } from 'react-redux'

function ShowVideoList({videoId,key}) {
  const vids = useSelector(s=>s.videoReducer)
  //console.log(vids.data)
    // const vids = [
    //     {
    //       _id: 1,
    //       video_src: video ,
    //       Chanel:"656gfde45g5y6hy66e332d45",
    //       title:"video 1",
    //       Uploader: "abc",
    //       description:"description of video 1"
    //     },
    //     {
    //       _id: 2,
    //       video_src: video ,
    //       Chanel:"656gfde45g5y6hy66e3243fa",
    //       title:"video 2",
    //       Uploader: "abc",
    //       description:"description of video 2"
    //     },
    //     {
    //       _id: 3,
    //       video_src: video ,
    //       Chanel:"656gfde45g5y6hy66ewe5tgre3",
    //       title:"video 3",
    //       Uploader: "abc",
    //       description:"description of video 3"
    //     },
    //     {
    //     _id: 4,
    //     video_src: video ,
    //     Chanel:"656gfde45g5y6hy66ewe5tgre3",
    //     title:"video 4",
    //     Uploader: "abc",
    //     description:"description of video 4"
    //     }
    
    //   ]
  return (
    <div className='Container_ShowVideoGrid'>
    {
      vids?.data?.filter(q=>q._id===videoId).map(vi=>
          {
              return (
                  <div key={vi._id} className="video_box_app">
                      <ShowVideo vid={vi}/>

                  </div>
              )
          }
      )
    }
  </div>
  )
}

export default ShowVideoList
