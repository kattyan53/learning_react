import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 5e1630ee96655a234028c32e0efa8594a7f8273803b41e4999fc1695748d93a6'
  }
});
