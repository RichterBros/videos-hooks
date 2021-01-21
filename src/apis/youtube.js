import axios from 'axios';

const KEY= 'AIzaSyB6TrBzw7ek-3nUbDvuA4I1jAWW7isfKTU'


export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});