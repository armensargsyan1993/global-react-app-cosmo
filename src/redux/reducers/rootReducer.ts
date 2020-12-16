import { homeReducer } from './homeReducer';
import { appReducer } from './appReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        app:appReducer,
        home:homeReducer
    }
)

export type RootState = ReturnType<typeof rootReducer>