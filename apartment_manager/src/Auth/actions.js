import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

export const auth_request = ()=>({
    type: AUTH_REQUEST
})

export const auth_success = (val)=>({
    type: AUTH_SUCCESS,
    payload: val
})

export const auth_error = ()=>({
    type: AUTH_ERROR
})


export const check_auth = (form)=> async(dispatch)=>{
    dispatch(auth_request())
    try {
        let res= await fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify({
              email: form.email,
              password: form.password
            })
        })
        let data = await res.json()
        console.log(data.token)
        dispatch(auth_success(data.token))
    } catch (error) {
        console.log(error)
        dispatch(auth_error())
    }
}