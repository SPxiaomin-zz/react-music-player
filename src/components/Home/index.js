import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>
      <Link to="/musiclist">MusicList</Link>
    </p>
  </div>
);

export default Home;
