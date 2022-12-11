import axios from 'axios';

class HttpRequest {
  static getMovies(query: string) {
    return axios.get(`http://localhost:4000/movies?${query}`);
  }
}
export default HttpRequest;
