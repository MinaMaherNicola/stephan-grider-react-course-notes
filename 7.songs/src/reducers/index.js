import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Do I Wanna Know', duration: '4:32' },
    { title: 'I Want It All', duration: '3:05' },
    { title: 'Knee Socks', duration: '4:18' },
    { title: 'I Wanna Be Yours', duration: '3:04' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
