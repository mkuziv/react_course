import axios from 'axios';
import { FormValues } from '../types/interfaces';

export type Methods = 'put' | 'post' | 'delete' | 'get';

const httpRequest = (method: Methods, params?: string, body?: FormValues) => axios[method](`http://localhost:4000/movies${params}`, body);

export default httpRequest;
