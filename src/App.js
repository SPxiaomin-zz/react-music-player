import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import MusicList from './components/MusicList';

class App extends Component {
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

export default App;
