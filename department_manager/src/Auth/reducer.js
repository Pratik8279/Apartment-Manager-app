import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

let initState= {
    loading: false,
    error: false,
    token: ""
}

export const authReducer = (state= initState, action)=>{
       switch(action.type){
        case AUTH_REQUEST: {
            return{
                loading: false,
                error: false,
                token: ""
            }
        }
        case AUTH_SUCCESS: {
            return{
                loading: false,
                error: false,
                token: action.payload
            }
        }
        case AUTH_ERROR: {
            return{
                loading: false,
                error: true,
                token: ""
            }
        }
        default: {
            {return state}
        }
       }
} 