import {
    GET_BREWERYS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_BY_CITY,
    BUTTON_RESET,
    SET_PAGE,
    CLEAN_DETAIL
} from "./actionsTypes";

const initialState = {
    allBrewerys: [],
    brewery: {},
    city: '',
    page: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREWERYS:
            return {
                ...state,
                allBrewerys: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                allBrewerys: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                brewery: action.payload
            }
        case GET_BY_CITY:
            return {
                ...state,
                city: action.payload
            }
        case BUTTON_RESET:
            return {
                ...state,
                city: ''
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                brewery: {}
            }
        default:
            return {
                ...state,
            }
    }
};

export default reducer;