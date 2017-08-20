import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MusicList from '../../components/MusicList';

import {
  playOne,
} from '../../actions';

const mapStateToProps = ({ musicList, currentMusicId, playMusic }) => ({
  musicList,
  currentMusicId,
  playMusic,
});

const mapDispatchToProps = (dispatch) => ({
  musicListPlayOne: (id) => {
    dispatch(playOne(id));
  }
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MusicList));
