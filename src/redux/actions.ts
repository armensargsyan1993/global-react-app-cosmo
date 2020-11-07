import { LOAD_CARDS, LOAD_PHOTOS } from './types';

export const photoLoader = (payload:any) => {
    return {
        type:LOAD_PHOTOS,
        payload
    }
}

export const cardsLoader = (payload:any) => {
    return {
        type:LOAD_CARDS,
        payload
    }
}