import axios from 'axios';


export const getData = (text) => {

    return axios.get(text).then(response => response.data).catch(error => console.log(error));

}
