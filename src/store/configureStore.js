
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer"
import handleErrors from "./middlewares/handleErrors";
import apiCalls from "./middlewares/apiCalls";

export default configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(handleErrors, apiCalls)
})

