import React from 'react';

const widthHandler = (props) => (
        <div className={`col-md-${props.width} col-sm-${props.width} col-xs-12 ${!props.offset ? '' : `offset-md-${props.offset} offset-sm-${props.offset}`}`}>
            {props.children}
        </div>
)

export default widthHandler;