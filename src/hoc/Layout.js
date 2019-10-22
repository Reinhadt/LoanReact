import React from 'react';

import Navigator from '../containers/Navigator/Navigator'
import Aux from './Auxiliar';

const layout = (props) => (
    <Aux>
        <Navigator />
        {props.children}
    </Aux>
)

export default layout