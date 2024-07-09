const handleErrors = store => next => action => {
    
    if(action.type=="error"){
        console.log("reducer not called");
        return;
    }
    next(action);
}

export default handleErrors