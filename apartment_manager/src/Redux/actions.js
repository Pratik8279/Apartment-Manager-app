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
  FILTER_IT,
  GET_ERROR,
  GET_REQUEST,
  GET_SUCCESS,
  SEARCH_IT,
  SORT_IT,
} from "./actionTypes";

export const get_req = () => ({
  type: GET_REQUEST,
});

export const get_success = (data) => ({
  type: GET_SUCCESS,
  payload: data,
});

export const get_error = () => ({
  type: GET_ERROR,
});

export const get_data = (page) => async (dispatch) => {
  dispatch(get_req());
  try {
    let res = await fetch(
      `https://angry-dog-kerchief.cyclic.app/info?_page=${page}&_limit=10`
    );
    let data = await res.json();
    dispatch(get_success(data));
  } catch (error) {
    dispatch(get_error());
    console.log(error);
  }
};

// Deleting actions

export const delete_request = () => ({
  type: DELETE_REQUEST,
});

export const delete_success = (id) => ({
  type: DELETE_SUCCESS,
  payload: id,
});

export const delete_error = () => ({
  type: DELETE_ERROR,
});

export const delete_data = (id) => async (dispatch) => {
  dispatch(delete_request());
  console.log(id);
  try {
    await fetch(`https://angry-dog-kerchief.cyclic.app/info/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    dispatch(delete_success(id));
  } catch (error) {
    dispatch(delete_error());
    console.log(error);
  }
};

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
  ({
    first_name,
    last_name,
    age,
    contact_no,
    gender,
    wing,
    room_no,
    image,
    type,
  }) =>
  async (dispatch) => {
    dispatch(add_req());
    try {
      let res = await fetch(`https://angry-dog-kerchief.cyclic.app/info`, {
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
          type,
        }),
      });
      dispatch(add_success());
    } catch (error) {
      dispatch(add_error());
      console.log(error);
    }
  };

// Edit Actions

export const edit_request = () => ({
  type: EDIT_REQUEST,
});

export const edit_success = () => ({
  type: EDIT_SUCCESS,
});

export const edit_error = () => ({
  type: EDIT_ERROR,
});

export const edit_data =
  (
    {
      fist_name,
      last_name,
      age,
      room_no,
      contact_no,
      wing,
      gender,
      type,
      image,
    },
    id
  ) =>
  async (dispatch) => {
    dispatch(edit_request());
    try {
      let res = await fetch(`https://angry-dog-kerchief.cyclic.app/info/${id}`, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          fist_name,
          last_name,
          age,
          room_no,
          contact_no,
          wing,
          gender,
          type,
          image,
        }),
      });
      let data = await res.json();
      console.log(data);
      dispatch(edit_success());
    } catch (error) {
      console.log(error);
      dispatch(edit_error());
    }
  };

// Sort actions

export const sort_success = (arg) => ({
  type: SORT_IT,
  payload: arg,
});

export const sort_it = (arg) => (dispatch) => {
  dispatch(sort_success(arg));
};

// Filter actions

export const filter_success = (arg) => ({
  type: FILTER_IT,
  payload: arg,
});

export const filter_it = (arg) => async (dispatch) => {
  dispatch(filter_success(arg));
};

// search actions

export const search_success = (arg) => ({
  type: SEARCH_IT,
  payload: arg,
});

export const search_it = (arg) => (dispatch) => {
  dispatch(search_success(arg));
};
