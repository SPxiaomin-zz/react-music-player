import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MusicItem from '../MusicItem';

// const musiclist = [
//   {
//     id: 1,
//     name: 'Everything in the World',
//     file: 'http://7xkinp.com1.z0.glb.clouddn.com/%E6%9B%B2%E5%A9%89%E5%A9%B7%20-%20Everything%20In%20The%20World.mp3',
//   },
//   {
//     id: 2,
//     name: 'Mockingbird',
//     file: 'http://7xkinp.com1.z0.glb.clouddn.com/Mockingbird.mp3',
//   },
// ];

const MusicList = ({ musicList, currentMusicId, playMusic, musicListPlayOne }) => (
  <div>
    <h2>MusicList</h2>
    <p>
      <Link to="/">Home</Link>
    </p>

    <hr />

    <ul>
      {
        musicList.map((music, key) => {
          return (
            <MusicItem
              key={key}
              {...music}
              id={key}
              currentMusicId={currentMusicId}
              onClick={() => {
                playMusic(music);
                musicListPlayOne(key);
              }}
            />
          );
        })
      }
    </ul>
  </div>
);

export default MusicList;
