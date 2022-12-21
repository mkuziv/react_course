import axios from 'axios';

class HttpRequest {
  static getMovies(query: string) {
    return axios.get(`http://localhost:4000/movies?${query}`);
  }

  static deleteMovie(id: string) {
    return axios.delete(`http://localhost:4000/movies/${id}`);
  }
}
export default HttpRequest;
