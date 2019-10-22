import * as actionTypes from  '../actions/actionTypes';

const initialState = {
    title: null,
    reviews: [],
    error: false
}


const reducer = (state = initialState, action ) => {

    switch(action.type) {
        case actionTypes.SET_REVIEWS:
            return {
                ...state,
                title: action.slider.title,
                reviews: action.slider.reviews
            }
        case actionTypes.FETCH_FAILED:
            return{
                ...state,
                error: true
            }
    }

    return state;

}

export default reducer;