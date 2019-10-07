import axios from "axios";
import { changeLoadingStatusTo, changeMessageStatusTo } from "../system/action";
import { FAILURE_MESSAGE } from "../system/type";
import { GET } from "../../config/httpMethod";
import { API_KEY_GIPHY } from "../../config/env";
import { SAVE_IMAGES } from "./type";

/**
 * @desc Dispatch to save reducer
 * @param funtion $dispatch
 * @param array $data - limit item on each response
 * @return function - async function
 */
function saveImage(data) {
  return {
    type: SAVE_IMAGES,
    data: data
  };
}

/**
 * @desc Call api to fetch images
 * @param string $q - Search Text
 * @param string $limit - limit item on each response
 * @param string $offset - Current Page
 * @return function - async function
 */
function fetchImagesApi(searchText, offSet = 0, limit = 8) {
  return axios({
    method: GET,
    url: "http://api.giphy.com/v1/gifs/search",
    params: {
      api_key: API_KEY_GIPHY,
      q: searchText,
      limit: limit,
      offset: offSet
    }
  });
}

/**
 * @desc Call api to fetch images
 * @param string $q - Search Text
 * @return function - call API with these informations, then dispatch scuccessful action or failed action
 */
export function fetchImages(searchText) {
  return async function(dispatch) {
    dispatch(changeLoadingStatusTo(true));

    try {
      const response = await fetchImagesApi(searchText);

      const data = response.data.data;

      dispatch(saveImage(data));

      dispatch(changeLoadingStatusTo(false));
    } catch (error) {
      dispatch(changeLoadingStatusTo(false));
      dispatch(changeMessageStatusTo(true, FAILURE_MESSAGE, error.response));
    }
  };
}

/**
 * @desc Call api to load more images
 * @param string $oldState - Old images
 * @param string $q - Search Text
 * @param string $offset - Current Page
 * @return function - call API with these informations, then dispatch scuccessful action or failed action
 */
export function loadMoreImages(oldState, searchText, offSet) {
  return async function(dispatch) {
    dispatch(changeLoadingStatusTo(true));

    try {
      const response = await fetchImagesApi(searchText, offSet);

      const data = response.data.data;

      dispatch(saveImage(oldState.concat(data)));

      dispatch(changeLoadingStatusTo(false));
    } catch (error) {
      dispatch(changeLoadingStatusTo(false));
      dispatch(changeMessageStatusTo(true, FAILURE_MESSAGE, error.response));
    }
  };
}

/**
 * @desc add Image to Favourite
 * @param string $image - object image
 * @return function - save to reducer
 */
export function addToFavourite(oldState, image) {
  let item = oldState.find(v => v.id === image.id);
  item.isFavourite = true;
  return saveImage(oldState);
}

/**
 * @desc remove Image from Favourite
 * @param string $image - object image
 * @return function - save to reducer
 */
export function removeFromFavourite(oldState, image) {
  let item = oldState.find(v => v.id === image.id);
  item.isFavourite = false;
  return saveImage(oldState);
}
