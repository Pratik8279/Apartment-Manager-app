import { DELETE_ERROR, DELETE_REQUEST, DELETE_SUCCESS, GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

const initState = {
    loading: false,
    error: false,
    data: []
}

export const appReducer = (state = initState, action)=>{
     switch(action.type){
        case GET_REQUEST:{
            return{
                ...state,
                loading: true,
                error: false,
                data: [],
                total: 0
            }
        }
        case GET_SUCCESS:{
            return{
                ...state,
                loading: false,
                error: false,
                data: action.payload,
                total: action.payload2
            }
        }
        case GET_ERROR:{
            return{
                ...state,
                loading: false,
                error: true,
                data: [],
                total: 0
            }
        }
        case DELETE_REQUEST:{
            return{
                ...state,
                loading: true,
                error: false,
                data: [],
                total: 0
            }
        }
        case DELETE_SUCCESS:{
            return{
                ...state,
                loading: false,
                error: false,
                data: state.data.filter((ele)=> ele.id!= action.payload),
                total: action.payload2
            }
        }
        case DELETE_ERROR:{
            return{
                ...state,
                loading: false,
                error: true,
                data: [],
                total: 0
            }
        }
         default:{
            {return state}
        }
     }
}