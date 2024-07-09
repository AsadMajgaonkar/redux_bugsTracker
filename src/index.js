
import { addBug, assignBug, bugRecieved, resolveBug } from "./store/bugs/reducer";
import store from "./store/configureStore"
import { apiCallReject, apiCall } from "./store/actionTypes";

store.dispatch(apiCall({
    url:"/bugs",
    method:"get",
    data:{},
    onSuccess:bugRecieved.type,
    onError:apiCallReject.type
}))

store.dispatch(apiCall({
    url:"/bugs",
    method:"post",
    data:{description:"bug4"},
    onSuccess:addBug.type,
    onError:apiCallReject.type
}))

store.dispatch(apiCall({
    url:"/bugs",
    method:"put",
    data:{id:4, userId:2},
    onSuccess:assignBug.type,
    onError:apiCallReject.type
}))

store.dispatch(apiCall({
    url:"/bugs",
    method:"put",
    data:{id:4, resolved:true},
    onSuccess:resolveBug.type,
    onError:apiCallReject.type
}))
