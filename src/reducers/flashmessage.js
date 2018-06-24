import { FLASH_MESSAGE } from '../actions';
import { createReducer } from '../utils';

const initialState = {
  message: null
}

const flashmessage =  (state = initialState, action) => {
  switch (action.type) {
    case FLASH_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};
const handlers = {
    [FLASH_MESSAGE]: flashmessage
};
export default createReducer({}, handlers);