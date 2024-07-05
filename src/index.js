
import * as actions from "./store/bugs/actionCreators"
import bugStore from "./store/bugs/configureStore";
const store = bugStore()


// store.subscribe(()=>{console.log("subscriber called");})

// // store.dispatch(actions.bugAdded("first bug"));

// const store = createStore(reducer);

console.log(store.getState());

// const unsubscribe = store.subscribe(()=>{console.log("subscribe called", store.getState())})

store.dispatch(actions.bugAdded("my first bug"))

// unsubscribe()

store.dispatch(actions.bugAdded("my second bug"))

