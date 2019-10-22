import * as actionTypes from '../actions/actionTypes'

const initialState = {
    items: [],
    error: false
}


const reducer = (state = initialState, action ) => {

    switch(action.type) {
        case actionTypes.GLOBAL_DATA:
            return {
                ...state,
                items: action.menu
            }
    }

    return state;

}

export default reducer;