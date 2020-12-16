import { CardsPayload } from "../actions"
import { LOAD_CARDS } from "../types"

const initialState = {
    cards:[] as Array<CardsPayload>
}

type HomeInitialState = typeof initialState

export const homeReducer = (state = initialState, action:any):HomeInitialState => {
    switch(action.type){
        case LOAD_CARDS:
            return {
                ...state,
                cards:[...action.payload]
            }
        default:return state
    }
}