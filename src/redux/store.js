import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import userSlice from "./userSlice";


export default configureStore({
    reducer:{
        user:userSlice,

    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})