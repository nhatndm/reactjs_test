import {
  CHANGE_LOADING_STATUS,
  CHANGE_MESSAGE_STATUS,
  SUCCESS_MESSAGE
} from "./type";

const initState = {
  loading_status: false,
  message: {
    message_status: false,
    message_content: "",
    message_type: SUCCESS_MESSAGE
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LOADING_STATUS:
      return { ...state, loading_status: action.loading_status };
    case CHANGE_MESSAGE_STATUS:
      return { ...state, message: action.message };
    default:
      return state;
  }
};
