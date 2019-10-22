import React from 'react'

const item = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-12 author">
                <h1>{props.data.name}</h1>
                <p>{props.data.position}</p>
            </div>
            <div className="col-md-7 col-sm-7 col-xs-12 comment">
                <h2>"{props.data.comment}"</h2>
            </div>
        </div>
    </div>
    
)

export default item;