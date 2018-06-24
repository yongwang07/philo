import { FLASH_MESSAGE } from '../actions';

export const sendFlashMessage = (message) => {
    return {
      type: FLASH_MESSAGE,
      payload: {
        message
      }
    }
  };