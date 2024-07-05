
import bugStore from "./store/bugs/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs/actionTypes";
const store = bugStore()


// store.subscribe(()=>{console.log("subscriber called");})

// // store.dispatch(actions.bugAdded("first bug"));

// const store = createStore(reducer);



// const unsubscribe = store.subscribe(()=>{console.log("subscribe called", store.getState())})

store.dispatch(bugAdded({description:"my first bug"}))
store.dispatch(bugAdded({description:"second bug"}))
store.dispatch(bugResolved({id:2}))

// unsubscribe()
console.log(store.getState());

// store.dispatch(actions.bugAdded("my second bug"))

