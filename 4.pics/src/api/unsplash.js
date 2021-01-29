import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID sCFc5Z7frG4-nat3taCNR-8n5lFgyY12Dr1TD58n-EE'
  }
});
