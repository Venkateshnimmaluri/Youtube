import { MdPendingActions } from "react-icons/md";

const channelReducers =(states=[],actions)=>{
    switch (actions.type){
        case 'UPDATE_DATA' :
            return states.map(state=>state._id===MdPendingActions.payload._id? actions.payload : state)
        case "FETCH_CHANNELS":
            return actions.payload;

        default:
            return states;
    }
}
export default channelReducers