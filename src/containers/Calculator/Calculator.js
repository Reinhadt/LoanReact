import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as calActions from '../../store/actions/'

import Title from '../../components/UI/Title'
import Desc from '../../components/UI/Desc'
import Spinner from '../../components/UI/Spinner'
import Loan from '../../components/UI/loan/Loan'
import GridHandler from '../../hoc/GridHandler'
import WidthHandler from '../../hoc/WidthHandler'
import Aux from '../../hoc/Auxiliar'

class Calculator extends Component{

    componentWillMount(){
        this.props.onLoadContent(process.env.REACT_APP_CALC_ENDPOINT);
    }

    render() {

        let cal = this.props.error ? <Spinner /> : <Spinner />

        if(this.props.title){
            cal = (
                <div className="container content">
                    <GridHandler>
                        <WidthHandler width={4}>
                            <Title text={this.props.title} />
                            <Desc text={this.props.description} />
                        </WidthHandler>
                        <WidthHandler width={6} offset={2} >
                            <Loan
                                ingredient={this.props.ingredient}
                                employees={this.props.employees}
                                food_savings={this.props.food_savings}
                                annual_savings={this.props.annual_savings}
                                handleChangeIngredient={this.props.onChangeRangeIngredient}
                                handleChangeEmployees={this.props.onChangeRangeEmployees}
                            />
                        </WidthHandler>
                    </GridHandler>

                </div>
            )
        }

        return(
            <Aux>
                {cal}
            </Aux>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredient      : state.cal.ingredient,
        employees       : state.cal.employees,
        food_savings    : state.cal.food_savings,
        annual_savings  : state.cal.annual_savings,
        title           : state.cal.title,
        description     : state.cal.description,
        error           : state.cal.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeRangeIngredient: (val) => dispatch(calActions.ingredientsSpending(val)),
        onChangeRangeEmployees:  (val) => dispatch(calActions.employeesAmount(val)),
        onLoadContent:           (end) => dispatch(calActions.initData(end))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);