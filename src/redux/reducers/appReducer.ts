import { PhotoPayload } from './../actions';
import { LOAD_PHOTOS, SHOW, HIDE } from './../types';



const initialState:AppInitialState = {
    images:[],
    show:false,
}

export const appReducer = (state = initialState,action:Action):AppInitialState => {
    switch(action.type){
        case LOAD_PHOTOS:
            return {
                ...state,
                images:[...action.payload],
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


export interface AppInitialState {
    images:Array<PhotoPayload>,
    show:boolean,
}

interface Action{
    type: typeof LOAD_PHOTOS | typeof SHOW | typeof HIDE,
    payload:Array<PhotoPayload>
}