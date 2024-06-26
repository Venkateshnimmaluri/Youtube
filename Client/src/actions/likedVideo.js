import * as api from '../api'

export const addtoLikedVideo=(likedVideoData) => async (dispatch)=>{
    try {
        const {data} = await api.addtoLikedVideo(likedVideoData);
        dispatch({type: "POST_LIKEDVIDEO" , data});
        dispatch(getAlllikedVideo());
     } 
     catch (error){
         console.log(error)
     }
}
export const getAlllikedVideo=()=> async (dispatch)=>{
    try {
      const {data} = await api.getAlllikedVideo();
      dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
    } catch (error) {
      console.log(error)
    }
  }

export const deletelikeVideo =(likeVideoData)=>async(dispatch)=>{
    try {
      const {videoId,Viewer} = likeVideoData
      await api.deleteLikedVideo(videoId,Viewer)
      dispatch(getAlllikedVideo())
    } catch (error) {
      console.log(error)
      
    }
  }