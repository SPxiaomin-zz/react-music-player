import { connect } from 'react-redux';

import Home from '../../components/Home';

import {
  togglePlay,
} from '../../actions';

const mapStateToProps = ({musicList, currentMusicItem, playState}) => ({
  musicList,
  currentMusicItem,
  playState,
});

const mapDispatchToProps = (dispatch) => ({
  homeTogglePlay: () => {
    dispatch(togglePlay());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)();
