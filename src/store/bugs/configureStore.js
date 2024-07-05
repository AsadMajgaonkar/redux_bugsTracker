
import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";



export default function bugStore(){
    return configureStore({reducer})
}
