import { LOAD_CARDS, LOAD_PHOTOS, SHOW, HIDE } from './types';

export const photoLoader = (payload:Array<PhotoPayload>):PhotoLoader => {
    return {
        type:LOAD_PHOTOS,
        payload
    }
}

export const cardsLoader = (payload:Array<CardsPayload>):CardsLoader => {
    return {
        type:LOAD_CARDS,
        payload
    }
}

export const showNav = ():ShowNav => {
    return {type:SHOW}
}

export const hideNav = ():HideNav => {
    return {type:HIDE}
}

export interface PhotoPayload{
    title:string,
    url:string,
    thumbnailUrl?:string,
    id:number,
    albumId?:number,
}

interface PhotoLoader{
    type:typeof LOAD_PHOTOS,
    payload:Array<PhotoPayload>
}

export interface CardsPayload{
    body: string
    id: number
    title: string
    userId: number
}

interface CardsLoader{
    type: typeof LOAD_CARDS,
    payload:Array<CardsPayload>
}





interface ShowNav {
    type: typeof SHOW
}

interface HideNav {
    type: typeof HIDE
}