import axios from 'axios';
const KEY = 'AIzaSyBL5UIcJFybGAjZGkQU7OVDCpi3SBEeSgo';
const URL = 'https://www.googleapis.com/youtube/v3';

export default axios.create({
  baseURL: URL,
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
