import { SAVE_IMAGES, SAVE_PAYLOAD } from "./type";

const initState = {
  images: [],
  payload: {
    searchText: "",
    page: 0
  }
};

export default (state = initState, action) => {
  switch (action.type) {
    case SAVE_IMAGES:
      return { ...state, images: action.data };
    case SAVE_PAYLOAD:
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};
