import {
  TOGGLE_PLAY,
  PLAY_ONE,
} from '../utils/actionTypes';

const togglePlay = () => ({
  type: TOGGLE_PLAY
});

const playOne = (id) => ({
  type: PLAY_ONE,
  id,
});

export {
  togglePlay,
  playOne,
};
