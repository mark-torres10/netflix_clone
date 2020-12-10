/* set up requests (axios helps us do what Postman would do, but programatically) */
import axios from "axios"; 

/* base url to make requests to the movie database */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", 
}); 

export default instance; 