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

const initState = {
  loading: false,
  error: false,
  data: [],
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload,
      };
    }
    case GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case ADD_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case ADD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case ADD_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case DELETE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case DELETE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: state.data.filter((ele) => ele.id !== action.payload),
      };
    }
    case DELETE_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case EDIT_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case EDIT_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }
    case EDIT_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case SORT_IT: {
      let new_data = [];
      if (action.payload == "asc") {
        new_data = state.data.sort((a, b) => {
          return a.room_no - b.room_no;
        });
      } else if (action.payload == "desc") {
        new_data = state.data.sort((a, b) => {
          return b.room_no - a.room_no;
        });
      }

      return {
        ...state,
        loading: false,
        error: false,
        data: [...new_data],
      };
    }
    case FILTER_IT: {
      let new_data = [];

      if (action.payload == "Owner") {
        new_data = state.data.filter((ele) => {
          return ele.type.includes(action.payload);
        });
      }
      if (action.payload == "Tenant") {
        new_data = state.data.filter((ele) => {
          return ele.type.includes(action.payload);
        });
      }
      return {
        ...state,
        loading: false,
        error: false,
        data: [...new_data],
      };
    }
    case SEARCH_IT: {
      let new_data = [];
      new_data = state.data.filter((ele) => {
        return ele.first_name.includes(action.payload);
      });
      return {
        ...state,
        loading: false,
        error: false,
        data: [...new_data],
      };
    }
    default: {
      {
        return state;
      }
    }
  }
};
