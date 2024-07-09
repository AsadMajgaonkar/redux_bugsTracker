import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer"

const userStore = configureStore({reducer})
export default userStore;