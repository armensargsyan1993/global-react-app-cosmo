import { LOAD_CARDS, LOAD_PHOTOS, SHOW, HIDE } from './types';

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

export const show = () => {
    return {type:SHOW}
}

export const hide = () => {
    return {type:HIDE}
}