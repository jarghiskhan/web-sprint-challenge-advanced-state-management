import axios from "axios";

export const LOADING = "LOADING";
export const LOADED = "LOADED";
export const FAILED_GET = "FAILED";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then((response) => {
      console.log("Response: ", response.data);
      dispatch({ type: "LOADED", payload: response.data });
    })
    .catch((err) => {
      // console.log(err.stack)
      dispatch({ type: "FAILED_GET", payload: err.stack });
    });
};

export const addSmurf = (smurf) => {
  return { type: "ADD_SMURF", payload: smurf };
};

export const setError = (error) => {
  return { type: "ERROR", payload: error };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
