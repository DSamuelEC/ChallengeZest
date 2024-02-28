import axios from "axios";
import {
    GET_BREWERYS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_BY_CITY,
    BUTTON_RESET,
    SET_PAGE,
    CLEAN_DETAIL
} from "./actionsTypes";

export const getBrewerys = () => {
    return async function (dispatch) {
        const allBrewerys = await axios('https://api.openbrewerydb.org/v1/breweries');
        return dispatch({
            type: GET_BREWERYS,
            payload: allBrewerys.data
        })
    }
};

export const getByName = (name) => {
    return async function (dispatch) {
        const allByName = await axios(`https://api.openbrewerydb.org/v1/breweries?by_name=${name}`);
        return dispatch({
            type: GET_BY_NAME,
            payload: allByName.data
        })
    }
};

export const getById = (id) => {
    return async function (dispatch) {
        const breweryById = await axios(`https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`);
        return dispatch({
            type: GET_BY_ID,
            payload: breweryById.data[0]
        })
    }
};

export const getByCity = (city) => {
    return {
        type: GET_BY_CITY,
        payload: city
    }
};

export const buttonReset = () => {
    return {
        type: BUTTON_RESET
    }
};

export const setPage = (payload) => {
    return {
        type: SET_PAGE,
        payload
    }
};

export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL
    }
}