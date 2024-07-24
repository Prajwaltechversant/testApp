import { combineReducers, configureStore } from "@reduxjs/toolkit";
import timerReducer from '../reducers/timerReducer';
import apiReducer from "../reducers/apiReducer";

const reducer = combineReducers(
    {
        timerReducer:timerReducer,
        apiReducer:apiReducer
    }
)

export const store = configureStore({
    reducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch