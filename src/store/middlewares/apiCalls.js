import axios from "axios";
import { apiCall} from "../actionTypes";

const apiCalls = store => next => async action => {
    if(action.type!=apiCall.type)  return next(action);
    next(action);

    const {url, method, data, onSuccess, onError} =  action.payload;

    try{
        const baseURL = "http://localhost:9001/api";

        const response = await axios({
            baseURL,
            url,
            method,
            data
        })
        store.dispatch({type:onSuccess, payload: response.data})   
    }
    catch(err){
        store.dispatch({type:onError, payload: {message:"error occ"}})    
        console.log(err);
    }
    
}

export default apiCalls