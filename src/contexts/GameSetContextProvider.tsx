import {
    IContextProviderProps,
    IGameSet,
    IGameSetContext,
} from './helpers/types';
import { GAMESETS_COLLECTION, GAMESET_CONTEXT_ACTIONS } from 'utils/consts';
import { getDocument, getDocuments } from 'firebaseClients/firestoreClient';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { IReducerAction } from './helpers/types';

interface IState {
    gameSets: IGameSet[];
    gameSet: IGameSet | null;
}

export const GameSetContext = createContext<IGameSetContext>(
    {} as IGameSetContext
);

export const useGameSet = () => useContext(GameSetContext);

const INIT_STATE: IState = {
    gameSets: [],
    gameSet: null,
};

const reducer = (state: IState, action: IReducerAction) => {
    switch (action.type) {
        case GAMESET_CONTEXT_ACTIONS.GET_GAMESETS:
            return { ...state, gameSets: action.payload };
        case GAMESET_CONTEXT_ACTIONS.GET_GAMESET:
            return { ...state, gameSet: action.payload };

        default:
            return state;
    }
};

const GameSetContextProvider = ({ children }: IContextProviderProps) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    useEffect(() => {
        getGameSets();
    }, []);

    const getGameSets = async () => {
        try {
            const gameSets: Array<IGameSet> = [];
            const gameSetsSnapshot = await getDocuments(GAMESETS_COLLECTION);

            gameSetsSnapshot.forEach((doc) => {
                gameSets.push({ ...doc.data(), id: doc.id } as IGameSet);
            });

            dispatch({
                type: GAMESET_CONTEXT_ACTIONS.GET_GAMESETS,
                payload: gameSets,
            });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const getGameSet = async (id: string) => {
        try {
            const gameSetSnapshot = await getDocument(GAMESETS_COLLECTION, id);

            dispatch({
                type: GAMESET_CONTEXT_ACTIONS.GET_GAMESET,
                payload: gameSetSnapshot?.data(),
            });
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const values = {
        gameSets: state.gameSets,
        gameSet: state.gameSet,
        getGameSet,
    };

    return (
        <GameSetContext.Provider value={values}>
            {children}
        </GameSetContext.Provider>
    );
};

export default GameSetContextProvider;
