import axios from "axios";

const instance = axios.create({ // using axios we create  an instance (using the base URL)
   baseURL:"https://api.themoviedb.org/3", // to give the baseURL

});

instance.get

export default instance