import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from '../../components/Home';

import {
  togglePlay,
  playPrev,
  playNext,
} from '../../actions';

const mapStateToProps = ({ musicList, currentMusicId, playState, playMusic }) => ({
  musicList,
  currentMusicId,
  playState,
  playMusic,
});

const mapDispatchToProps = (dispatch) => ({
  homeTogglePlay: () => {
    dispatch(togglePlay());
  },
  homePlayPrev: (musicList, currentMusicId, playMusic) => {
    let index = (currentMusicId - 1 + musicList.length) % musicList.length;
    playMusic(musicList[index]);

    dispatch(playPrev());
  },
  homePlayNext: (musicList, currentMusicId, playMusic) => {
    let index = (currentMusicId + 1) % musicList.length;
    playMusic(musicList[index]);

    dispatch(playNext());
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));
