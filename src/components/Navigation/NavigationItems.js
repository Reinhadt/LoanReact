import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationItems = (props) =>{
    const isActive = (path, match, location) => !!(match || path === location.pathname);

    const list = props.items.map( (el, index)  => <li key={index}><NavLink to={el.route} activeClassName="itemActive" isActive={isActive.bind(this, `/${el.route}`)}>{el.text}</NavLink></li>)
    
    return(
        <ul>
            {list}
        </ul>
    )
        
} 

export default navigationItems;