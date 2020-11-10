import { LOAD_PHOTOS, SHOW, HIDE } from './../types';


const initialState = {
    images:[],
    show:true
}

export const appReducer = (state:any = initialState,action:any) => {
    switch(action.type){
        case LOAD_PHOTOS:
            return {
                ...state,
                images:[...action.payload]
            }
        case SHOW:{
            return {
                ...state,
                show:true
            }
        }
        case HIDE:{
            return {
                ...state,
                show:false
            }
        }
        default: return state
    }
}