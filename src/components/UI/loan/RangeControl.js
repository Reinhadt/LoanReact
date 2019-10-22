import React from 'react';
import InputRange from 'react-input-range';

import "react-input-range/lib/css/index.css";

const rangeControl = props => (
    <div>
        <InputRange 
            step={props.step}
            maxValue={props.maxValue}
            minValue={props.minValue}
            value={props.value}
            onChange={props.onChange}
        />
    </div>
)

export default rangeControl;