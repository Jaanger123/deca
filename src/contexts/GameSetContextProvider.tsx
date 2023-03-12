import { getDocuments } from "firebaseClients/firestoreClient";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { GAMESETS_COLLECTION, GAMESET_CONTEXT_ACTIONS } from "utils/consts";
import { IGameSet } from "./helpers/types";
import { IReducerAction } from "./helpers/types";

interface IGameSetContext {
    gameSets: Array<IGameSet>;
}

interface IGameSetContextProviderProps {
    children: React.ReactNode;
}

export const GameSetContext = createContext<IGameSetContext | null>(null);

export const useGameSet = () => useContext(GameSetContext);

const INIT_STATE: IGameSetContext = {
    gameSets: [],
};

const reducer = (state = INIT_STATE, action: IReducerAction) => {
    switch (action.type) {
        case GAMESET_CONTEXT_ACTIONS.GET_GAMESETS:
            return { ...state, gameSets: action.payload };

        default:
            return state;
    }
};

const GameSetContextProvider = ({ children }: IGameSetContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        getGameSets();
    }, []);

    const getGameSets = async () => {
        try {
            const gameSets: Array<IGameSet> = [];
            const gameSetsSnapshot = await getDocuments(GAMESETS_COLLECTION);

            gameSetsSnapshot.forEach((doc) => {
                gameSets.push(doc.data() as IGameSet);
            });

            dispatch({
                type: GAMESET_CONTEXT_ACTIONS.GET_GAMESETS,
                payload: gameSets,
            });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const values = {
        gameSets: state.gameSets,
    };

    return (
        <GameSetContext.Provider value={values}>
            {children}
        </GameSetContext.Provider>
    );
};

export default GameSetContextProvider;
