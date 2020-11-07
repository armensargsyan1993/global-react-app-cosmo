import { LOAD_CARDS } from "../types"

const initialState = {
    cards:[]
}

export const homeReducer = (state:any = initialState, action:any) => {
    switch(action.type){
        case LOAD_CARDS:
            return {
                ...state,
                cards:[...action.payload]
            }
        default:return state
    }
}