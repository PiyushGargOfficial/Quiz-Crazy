import * as actionTypes from './types'
import axios from 'axios'

export const getCreds = (username, category) => dispatch => {
    dispatch(setInfo(username, category))
    dispatch(setLoading())
    axios
        .get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
        .then(res => 
            dispatch({
                type: actionTypes.GET_CREDS,
                payload: res.data
            }))
}

export const setInfo = (name, category) => {
return {
    type: actionTypes.SET_INFO,
    payload: {
        username: name,
        category
    }
}
}

export const setLoading = () => {
    return {
        type: actionTypes.SET_LOADING
    }
}

export const setQuestions = () => {
    return {
        type: actionTypes.SET_QUESTIONS
    }
}