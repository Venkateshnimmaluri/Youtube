import axios from 'axios';
const API = axios.create({ baseURL: `http://localhost:5500/` });


API.interceptors.request.use(req => {
  if (localStorage.getItem('Profile')) {
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`;
  }
  return req;
})

export const login = (authData) => API.post('/user/login', authData);

export const updateChannelData = (id, updateData) => API.patch(`/user/update/${id}`, updateData);

export const fetchAllChannel=()=>API.get('/user/getAllChannels');


export const uploadVideo=(fileData, fileOptions) => API.post('/video/uploadVideo',fileData,fileOptions);

export const getVideos=()=>API.get('/video/getvideos');

export const likeVideo=(id,Like)=>API.patch(`/video/like/${id}`,{Like});

export const viewsVideo=(id)=>API.patch(`/video/view/${id}`);



export const addtoLikedVideo=(likedVideoData) => API.post('/video/likeVideo',likedVideoData)

export const getAlllikedVideo=()=>API.get('/video/getAlllikeVideo')

export const deleteLikedVideo=(videoId,Viewer) =>API.delete(`/video/deletelikeVideo/${videoId}/${Viewer}`)


export const addtoWatchLater=(watchLaterData) => API.post('/video/watchLater',watchLaterData)

export const getAllWatchLater=()=>API.get('/video/getAllWatchLater')

export const deleteWatchLater=(videoId,Viewer) =>API.delete(`/video/deleteWatchLater/${videoId}/${Viewer}`)


export const addtoHistory=(HistoryData) => API.post('/video/History',HistoryData)

export const getAllHistory=()=>API.get('/video/getAllHistory')

export const clearHistory=(userId) =>API.delete(`/video/deleteHistory/${userId}`)


export const postComment =(CommentData)=> API.post('/comment/post',CommentData)
export const deleteComment =(id)=> API.delete(`/comment/delete/${id}`)
export const editComment =(id,commentBody)=> API.patch(`/comment/edit/${id}`,{commentBody})
export const getAllComment =()=> API.get('/comment/get')