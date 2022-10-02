import {
  ADD_ERROR,
  ADD_REQUEST,
  ADD_SUCCESS,
  DELETE_ERROR,
  DELETE_REQUEST,
  DELETE_SUCCESS,
  EDIT_ERROR,
  EDIT_REQUEST,
  EDIT_SUCCESS,
  GET_ERROR,
  GET_REQUEST,
  GET_SUCCESS,} from "./actionTypes";

export const get_req = () => ({
  type: GET_REQUEST,
});

export const get_success = (data) => ({
  type: GET_SUCCESS,
  payload: data
});

export const get_error = () => ({
  type: GET_ERROR,
});

export const get_data = (page) => async (dispatch) => {
  dispatch(get_req());
  try {
    let res = await fetch(`http://localhost:8080/info?_page=${page}&_limit=10`);
    let data = await res.json();
    dispatch(get_success(data));
  } catch (error) {
    dispatch(get_error());
    console.log(error);
  }
};

// Deleting actions
export const delete_request = ()=>({
    type: DELETE_REQUEST
})

export const delete_success = (id)=>({
  type: DELETE_SUCCESS,
  payload: id
})

export const delete_error = ()=>({
  type: DELETE_ERROR
})

export const delete_data = (id)=> async(dispatch)=>{
  dispatch(delete_request())
  console.log(id)
  try {
     await fetch(`http://localhost:8080/info/${id}`,{
      method: "DELETE",
      headers: {"Content-Type" : "application/json"}
     })
     dispatch(delete_success(id))
  } catch (error) {
    dispatch(delete_error())
    console.log(error)
  }
}

// Adding actions

export const add_req = () => ({
  type: ADD_REQUEST,
});

export const add_success = (id, num) => ({
  type: ADD_SUCCESS,
});

export const add_error = () => ({
  type: ADD_ERROR,
});

export const add_data =
  ({ first_name, last_name,age,contact_no,gender,wing,room_no,image,type}) => async (dispatch) => {
    dispatch(add_req());
    try {
      let res = await fetch(`http://localhost:8080/info`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          age,
          contact_no,
          gender,
          wing,
          room_no,
          image,
          type
        }),
      });
      // let data = await res.json()
      dispatch(add_success());
    } catch (error) {
      dispatch(add_error());
      console.log(error);
    }
  };


  // Edit Actions

  export const edit_request = ()=>({
     type: EDIT_REQUEST
  })

  export const edit_success = ()=>({
    type: EDIT_SUCCESS
 })

 export const edit_error = ()=>({
  type: EDIT_ERROR
})


export const edit_data =({fist_name,last_name,age,room_no,contact_no,wing,gender,type,image},id) => async(dispatch)=>{
  console.log(fist_name,last_name,age,room_no,contact_no,wing,gender,type)
    try {
      let res= await fetch(`http://localhost:8080/info/${id}`,{
        method: "PUT",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify({
          fist_name,last_name,age,room_no,contact_no,wing,gender,type,image
        })
      })
      let data= await res.json();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }