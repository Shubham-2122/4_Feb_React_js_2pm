import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../Slice/userApi";
// import  userSlice  from "../Slice/userSlice";

export const store = configureStore({
    reducer: {
        // users : userSlice
        [userApi.reducerPath]: userApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck : false
        }
        ).concat(userApi.middleware),
    devTools : true
})