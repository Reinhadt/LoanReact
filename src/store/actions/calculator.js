import * as actionTypes from './actionTypes'

const calculateAnnual = (e, f) => {
    let res = Number(e) * 1337 + Number(f);
    return res.toFixed(0);
}

const calculateFood = (i) => {
    let res = i * 0.3;
    return res.toFixed(0)
}

export const ingredientsSpending = (val) => {
    return (dispatch, getState) => {

        const { ingredient, employees, food_savings } = getState().cal;
        const food = calculateFood(ingredient)
        const annual = calculateAnnual(employees, food_savings)

        dispatch({
            type: actionTypes.INGREDIENT_SPENDING,
            payload : {
                food: food,
                annual: annual,
                ing: val
            }
        })
    }
}

export const employeesAmount = (val) => {
    return (dispatch, getState) => {

        const { employees, food_savings } = getState().cal;
        //const annual = calculateAnnual(employees, food_savings)

        dispatch({
            type: actionTypes.EMPLOYEES_AMOUNT,
            payload : {
                emp: val,
                annual: calculateAnnual(employees, food_savings),
            }
        })
    }
}
