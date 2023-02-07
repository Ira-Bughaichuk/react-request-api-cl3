import axios from 'axios';

export default function fetchApi() {
     return axios.get('https://jsonplaceholder.typicode.com/albums');
   
}