import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Do I Wanna Know', duration: '3:15' },
    { title: 'I Want It All', duration: '2:30' },
    { title: 'Arabella', duration: '4:50' },
    { title: 'Knee Socks', duration: '1:15' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SELECT_SONG') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
