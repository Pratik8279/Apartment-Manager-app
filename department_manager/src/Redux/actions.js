import { GET_ERROR, GET_REQUEST, GET_SUCCESS } from "./actionTypes"

export const get_req = ()=> ({
    type: GET_REQUEST
})

export const get_success = (data,num)=> ({
    type: GET_SUCCESS,
    payload: data,
    payload2: num
})

export const get_error = ()=> ({
    type: GET_ERROR
})

export const get_data = (page)=> async(dispatch)=>{
    dispatch(get_req())
   try {
    let res = await fetch(`http://localhost:8080/info?_page=${page}&_limit=10`)
    let data= await res.json()
    let num = data.length
    dispatch(get_success(data,num))
   } catch (error) {
    dispatch(get_error())
     console.log(error)
   }
}

// Deleting actions

export const delete_req = ()=> ({
    type: GET_REQUEST
})

export const delete_success = (id,num)=> ({
    type: GET_SUCCESS,
    payload: id,
    payload2 : num
})

export const delete_error = ()=> ({
    type: GET_ERROR
})

export const delete_data = (id)=> async(dispatch)=>{
    dispatch(delete_req())
   try {
    let res = await fetch(`http://localhost:8080/info/${id}`,{
        method: "DELETE",
        headers: {"content-type" : "application/json"}
    }) 
    let data = await res.json()
    let num = data.length
    dispatch(delete_success(id,num))
   } catch (error) {
    dispatch(delete_error())
     console.log(error)
   }
}