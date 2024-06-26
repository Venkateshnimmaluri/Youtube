import React, { useEffect } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import './LikeWatchLaterSaveBtns.css'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addtoLikedVideo, deletelikeVideo } from '../../actions/likedVideo'
import { addtoWatchLater, deleteWatchLater } from '../../actions/watchLater'


function LikeWatchLaterSaveBtns({vv,vid}) {
    const CurrentUser = useSelector((state)=>state?.currentUserReducer)
    const dispatch=useDispatch() 
    const [SaveVideo,setSaveVideo ] = useState(false)
    const [DislikeBtn,setDislikeBtn ] = useState(false)
    const [LikeBtn,setLikeBtn ] = useState(false)
    const likedVideoList = useSelector((state)=>state.likedVideoReducer)
    const watchLaterList = useSelector(state=>state.watchLaterReducer)
    useEffect(()=>{
        likedVideoList?.data.filter((q)=>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map((m)=>setLikeBtn(true));
        watchLaterList?.data.filter((q)=>q?.videoId === vid && q?.Viewer === CurrentUser?.result._id).map((m)=>setSaveVideo(true));
    }, [])
    const handleSavedVideo=()=>{
        if(CurrentUser) {
        if(SaveVideo){
            setSaveVideo(false);
            dispatch(deleteWatchLater({
                videoId : vid,
                Viewer : CurrentUser?.result._id,   
            })
        )
        }else{
            setSaveVideo(true);
            dispatch(addtoWatchLater({
                videoId : vid,
                Viewer : CurrentUser?.result._id,
            }))
        }
      } else {
        alert("Please Login to save video")
      }
    }
    const toggleLikeBtn=(e,lk)=>{
    if(CurrentUser){
        if(LikeBtn){
            setLikeBtn(false)
            dispatch(likeVideo({
            id:vid,
            Like: lk - 1,
            }
            ))
         dispatch(deletelikeVideo({
            videoId : vid,
            Viewer : CurrentUser?.result._id,
         }))   
        }else{
            setLikeBtn(true)
            dispatch(likeVideo({
                id:vid,
                Like: lk +1,
            }
            ))
            dispatch(addtoLikedVideo({
                videoId : vid,
                Viewer : CurrentUser?.result._id,
            
            }))
            setDislikeBtn(false)
        }
    }else {
        alert("Please Login to give like")
    }
    }
    const toggleDislikeBtn=(e,lk)=>{
    if(CurrentUser){
        if(DislikeBtn){
            setDislikeBtn(false)
        }
        else{
            setDislikeBtn(true)
            if(LikeBtn){
               dispatch(
                likeVideo({
                    id: vid,
                    Like: lk - 1, 
                })
            )
            dispatch(deletelikeVideo({
                videoId : vid,
                Viewer : CurrentUser?.result._id,
             }))   
        }
        setLikeBtn(false)
        }
    }else {
        alert("Please Login to give dislike")
    }
    }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btnVideoPage">
            <BsThreeDots/>
        </div>

        <div className="btnVideoPage">
        <div className='like_videoPage' onClick={(e)=>toggleLikeBtn(e,vv.Like)}>
            {
                LikeBtn ? (<>
            <AiFillLike size={22}  className='btns_videoPage'/>
        
            </>
            ):(
            <>
            <AiOutlineLike size={22} className='btns_videoPage'/>
            </>
            )}
            <b>{vv?.Like}</b> 
         </div>
        <div className='like_videoPage' onClick={(e)=>toggleDislikeBtn(e,vv.Like)}>
            {
                DislikeBtn ? (<>
            <AiFillDislike size={22}  className='btns_videoPage'/>
        
            </>
            ):(
            <>
            <AiOutlineDislike size={22} className='btns_videoPage'/>
            </>
            )}
            <b>Dislike</b> 
         </div>
         <div className='like_videoPage' onClick={()=>handleSavedVideo()}>
            {
                SaveVideo ? (<>
            <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
            <b>Saved</b>
            </>
            ):(
            <>
            <RiPlayListAddFill size={22} className='btns_videoPage'/>
            <b>Save</b>
            </>
            )} 
         </div>
         <div className='like_videoPage'>
                   <>
            <RiHeartAddFill size={22} className='btns_videoPage'/>
            <b>Thanks</b>
            </>
         </div>
         <div className='like_videoPage'>
                   <>
            <RiShareForwardLine size={22} className='btns_videoPage'/>
            <b>Share</b>
            </>
         </div>
       </div>
       </div>
  )
}

export default LikeWatchLaterSaveBtns
