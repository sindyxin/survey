import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => // if only one expression inside can remove curly braces and return keyword
  async dispatch => {  //only one argument can remove parenthese
     // Make a request for a user with a given ID
     const res = await axios.get('/api/current_user');
     dispatch ({type: FETCH_USER, payload: res.data });
    // axios
    //   .get('/api/current_user')
    //   .then(res => dispatch({
    //     type: FETCH_USER, 
    //     payload: res     
    // }));
  };
  
