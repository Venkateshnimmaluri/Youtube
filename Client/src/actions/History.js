import * as api from '../api'

export const addtoHistory=(HistoryData) => async (dispatch)=>{
    try {
        const {data} = await api.addtoHistory(HistoryData);
        dispatch({type: "POST_HISTORY" , data});
        dispatch(getAllHistory());
     } 
     catch (error){
         console.log(error)
     }
}

export const getAllHistory=()=> async (dispatch)=>{
    try {
      const {data} = await api.getAllHistory();
      dispatch({type:'FETCH_ALL_HISTORY_VIDEOS',payload:data})
    } catch (error) {
      console.log(error)
    }
  }

  export const clearHistory =(HistoryData)=>async(dispatch)=>{
    try {
      const {userId} = HistoryData
      await api.clearHistory(userId)
      dispatch(getAllHistory())
    } catch (error) {
      console.log(error)
      
    }
  }