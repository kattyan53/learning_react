import axios from 'axios';

const KEY = 'AIzaSyBqViwj_Kg9Ohh0WbX_O8zUkEhI7KqukVM';

export default axios.create({
  baseURL: 'https//www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  }
});
