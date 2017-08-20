import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      <Link to="/musiclist">MusicList</Link>
    </p>

    <hr />

    {/* TODO: stop writing here */}
    <p>Everythink in the world</p>
    <button>播放</button>
  </div>
);

export default Home;
