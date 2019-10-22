import React from 'react';

import RangeControl from './RangeControl'
import GridHandler from '../../../hoc/GridHandler'
import WidthHandler from '../../../hoc/WidthHandler'
import Aux from '../../../hoc/Auxiliar'
import Desc from '../../UI/Desc'

const thousandizer = (n) => {
    let t = n * 1000
    return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

}

const loan = props => (
    <Aux>
        <GridHandler>
            <WidthHandler width={5}>
                <Desc text="Monthly ingredient spending" />
            </WidthHandler>
            <WidthHandler width={7}>
                <div className="sliderSlave">
                    <span className="calcSign">$</span>{thousandizer(props.ingredient)}
                </div>
            </WidthHandler>
            
        </GridHandler>
        
        <RangeControl step={1} maxValue={100} minValue={10} value={props.ingredient} onChange={props.handleChangeIngredient} />
        <GridHandler>
            <WidthHandler width={5}>
                <Desc text="Full-time employees that process invoices" />
            </WidthHandler>
            <WidthHandler width={7}>
                <div className="sliderSlave employee">
                    {props.employees}
                </div>
            </WidthHandler>
            
        </GridHandler>
        <RangeControl step={1} maxValue={10} minValue={0} value={props.employees} onChange={props.handleChangeEmployees} />
        <GridHandler>
            <WidthHandler width={6}>
                <div className="cifras">
                 <span className="calcSignTotals">$</span>{thousandizer(props.food_savings)}
                </div>
                <Desc text="Your estimated annual savings" />
            </WidthHandler>
            <WidthHandler width={6}>
                <div className="cifras">
                    <span className="calcSignTotals">$</span>{thousandizer(props.annual_savings)}
                </div>
                <Desc text="Estimated cost fodd savings" />
            </WidthHandler>
        </GridHandler>
    </Aux>
)

export default loan
