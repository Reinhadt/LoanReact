import React from 'react';

const gridHandler = (props) => (
    <div className="container">
        <div className="row">
            {props.children}
        </div>
    </div>
        
)

export default gridHandler;