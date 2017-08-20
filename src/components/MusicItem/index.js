import React from 'react';

const MusicItem = ({ id, name, currentMusicId, onClick }) => (
  <li onClick={onClick}>
    {
      id === currentMusicId ? <span style={{ color: 'red'}}>{name}</span> : name
    }
  </li>
);

export default MusicItem;
