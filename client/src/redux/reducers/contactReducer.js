import { GET_CONTACTS } from "../types/contactTypes";

const initState={
    contacts:[],
    contact:null,
    loading:true,


}

function contactReducer(state=initState,{type,payload}){
    switch(type){
        case GET_CONTACTS:
            return {
                ...state,contacts:payload,loading:false,
            }
            default:
                return state;
    }
}

export default contactReducer;