
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer"

const bugStore =  configureStore({reducer})
export default bugStore

