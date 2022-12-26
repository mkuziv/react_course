import axios from 'axios';

export type Methods = 'put' | 'post' | 'delete' | 'get';

const httpRequest = (method: Methods, params?: string, body?: any) => axios[method](`http://localhost:4000/movies${params}`, body);

export default httpRequest;
