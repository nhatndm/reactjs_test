import { SAVE_IMAGES, SAVE_FAVORITE_IMAGES } from "./type";

const initState = {
  images: [],
  favoriteImages: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SAVE_IMAGES:
      return { ...state, images: action.data };
    case SAVE_FAVORITE_IMAGES:
      return { ...state, favoriteImages: action.data };
    default:
      return state;
  }
};
