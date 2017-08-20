import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Home from '../../components/Home';

import {
  togglePlay,
  playPrev,
  playNext,
} from '../../actions';

const mapStateToProps = ({ musicList, currentMusicId, playState }) => ({
  musicList,
  currentMusicId,
  playState,
});

const mapDispatchToProps = (dispatch) => ({
  homeTogglePlay: () => {
    dispatch(togglePlay());
  },
  homePlayPrev: () => {
    dispatch(playPrev());
  },
  homePlayNext: () => {
    dispatch(playNext());
  },
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home));
