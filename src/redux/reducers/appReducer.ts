import { LOAD_PHOTOS } from './../types';


const initialState = {
    images:[]
}

export const appReducer = (state:any = initialState,action:any) => {
    switch(action.type){
        case LOAD_PHOTOS:
            return {
                ...state,
                images:[...action.payload]
            }
        default: return state
    }
}