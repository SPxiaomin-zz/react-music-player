/* global $ */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ musicList, currentMusicId, playState, homeTogglePlay }) => (
  <div>
    <h2>Home</h2>
    <p>
      <Link to="/musiclist">MusicList</Link>
    </p>

    <hr />

    <p>{musicList.filter(music => music.id === currentMusicId)[0].name}</p>
    <button
      onClick={() => {
        playState ? $('#player').jPlayer('pause') : $('#player').jPlayer('play');
        homeTogglePlay();
      }}
    >
      {playState ? '暂停': '播放'}
    </button>
    <div>
      <button
        onClick={() => {
          homePlayPrev();
        }}
      >
        上一首
      </button>
      <button
        onClick={() => {
          homePlayNext();
        }}
      >
        下一首
      </button>
    </div>
  </div>
);

export default Home;
