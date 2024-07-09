
// function createStore(reducer){
//     let state;
//     let subs = false;
//     let callback;

//     function getState(){
//         return state;
//     }

//     function dispatch(action){
//         state = reducer(state, action)
//         if(subs)
//             sideEffect(callback)
//     }

//     function sideEffect(callback){
//         callback();
//     }

//     function subscribe(func){
//         subs = true;
//         callback = func;
//         return unsubscribe
//     }

//     function unsubscribe(){
//         subs = false;
//     }

//     return {
//         getState:getState,
//         dispatch:dispatch,
//         subscribe:subscribe
//     }
// }

// export default createStore