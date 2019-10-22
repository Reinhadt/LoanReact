import * as actionTypes from  '../actions/actionTypes';

const initialState = {
    ingredient: 20,
    employees: 0,
    food_savings: 0,
    annual_savings: 0,
    tilte: null,
    description: null,
    error: false
}

const reducer = (state=initialState, action) => {

    // eslint-disable-next-line default-case
    switch (action.type){
        case actionTypes.INGREDIENT_SPENDING:
            return {
                ...state,
                ingredient: action.payload.ing,
                food_savings: action.payload.food,
                annual_savings: action.payload.annual
            }
        case actionTypes.EMPLOYEES_AMOUNT:
            return {
                ...state,
                employees: action.payload.emp,
                annual_savings: action.payload.annual
            }
        case actionTypes.FOOD_SAVINGS:
            return {
                ...state,
                food_savings: action.food
            }
        case actionTypes.ANNUAL_SAVINGS:
            return {
                ...state,
                annual_savings: action.annual
            }
        case actionTypes.CALC_DATA:
            return {
                ...state,
                title: action.calculator.title,
                description: action.calculator.description
            }
        case actionTypes.FETCH_FAILED:
            return{
                ...state,
                error: true
            }
    }

    return state
}

export default reducer;