import axios from 'axios';

class HttpRequest {
  static getMovies(query: string) {
    return axios.get(`http://localhost:4000/movies?${query}`);
  }

  static deleteMovie(id: string) {
    return axios.delete(`http://localhost:4000/movies/${id}`);
  }

  static updateMovie(body: any) {
    return axios.put('http://localhost:4000/movies', body);
  }

  static addMovie(body: any) {
    return axios.post('http://localhost:4000/movies', body);
  }
}
export default HttpRequest;
