import * as actionTypes from './types'

const INITIAL_STATE = {
    username: "",
    category: "",
    questions: [],
    loading: false
}

const reducer  = (state = INITIAL_STATE, action) => {
switch(action.type){
    case actionTypes.SET_INFO:
        return {
            ...state,
            username: action.payload.username,
            category: action.payload.category,
        }

    case actionTypes.GET_CREDS:
            return {
                ...state,
                questions: action.payload,
                loading: false
            }

    case actionTypes.SET_LOADING:
        return {
            ...state,
            loading: true
        }

    case actionTypes.SET_QUESTIONS:
        return {
            ...state,
            questions: []
        }

    default:
        return state
}
 }

export default reducer