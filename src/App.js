/* global $ */
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './containers/Home';
import MusicList from './containers/MusicList';

class App extends Component {
  componentDidMount() {
    let { musicList, currentMusicId } = this.props;

    $('#player')
      .jPlayer({
        supplied: 'mp3'
      })
      .jPlayer('setMedia', {
        mp3: musicList[currentMusicId].file
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/musiclist" component={MusicList} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ musicList, currentMusicId }) => ({
  musicList,
  currentMusicId,
});

export default connect(
  mapStateToProps,
  null,
)(App);
