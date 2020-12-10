import React, { useState} from 'react'; 
import "./Row.css"; 

const Row = ({ title }) => {

    /* Use state to keep track of movies */
    const [movies, setMovies] = useState([]); 

    return (
        <div>
            {/* title of row*/}
            <h1>{title}</h1>

            {/* container with posters of each movie/show */}
            
             
        </div>
    )
}

export default Row; 