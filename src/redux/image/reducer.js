import { SAVE_IMAGES } from "./type";

const initState = {
  images: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SAVE_IMAGES:
      return { ...state, images: action.data };
    default:
      return state;
  }
};
