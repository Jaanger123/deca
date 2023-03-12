export interface IReducerAction<payloadType = any> {
    type: string;
    payload?: payloadType;
}

export interface IGameSet {
    gameSetTitle: string;
    playersQuantity: string;
    gameSetPrice: number;
    gameSetRating: number;
    characterImgs: Array<string>;
    bgImg: string;
}

export interface IFormData {
    [key: string]: string;
    surname: string;
    name: string;
    email: string;
    number: string;
    gameSet: string;
    players: string;
    characters: string;
    time: string;
    dateInput: string;
}
