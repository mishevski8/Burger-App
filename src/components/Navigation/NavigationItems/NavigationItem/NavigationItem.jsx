import React from 'react';
import classes from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom';

const navigateToItem = (props) => (
    <li className={classes.NavigationItem}>
        <NavLink
            activeClassName={classes.active}
            exact
            to={props.link}>{props.children}
        </NavLink>
    </li>
);

export default navigateToItem;

