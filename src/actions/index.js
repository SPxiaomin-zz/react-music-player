import {
  TOGGLE_PLAY,
  PLAY_ONE,
  PLAY_PREV,
  PLAY_NEXT,
} from '../utils/actionTypes';

const togglePlay = () => ({
  type: TOGGLE_PLAY
});

const playOne = (id) => ({
  type: PLAY_ONE,
  id,
});

const playPrev = () => ({
  type: PLAY_PREV,
});

const playNext = () => ({
  type: PLAY_NEXT,
});

export {
  togglePlay,
  playOne,
  playPrev,
  playNext,
};
