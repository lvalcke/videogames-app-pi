import { GET_ALLGAMES } from "./actions";

const initialState = {
    allGames : []
};

const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_ALLGAMES:
            return {
                ...state,
                allGames: action.payload
            }
        default :
            return {
                ...state
            }
    
    }
}

export default reducer;