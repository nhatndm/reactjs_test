import { CHANGE_LOADING_STATUS, CHANGE_MESSAGE_STATUS } from "./type";

/**
 * @desc change loading status
 * @param boolean $loading_status - show or hide loading status
 * @return object - Action creator object
 */
export const changeLoadingStatusTo = loading_status => {
  return {
    type: CHANGE_LOADING_STATUS,
    loading_status: loading_status
  };
};

/**
 * @desc change message status
 * @param boolean $message_status - show or hide message status
 * @param string $message_type - success or failure
 * @param string $message_content - the message content
 * @return object - Action creator object
 */
export const changeMessageStatusTo = (
  message_status,
  message_type,
  message_content
) => {
  return {
    type: CHANGE_MESSAGE_STATUS,
    message: {
      message_status: message_status,
      message_type: message_type,
      message_content: message_content
    }
  };
};
