import React from 'react';
import PT from 'prop-types';
import classes from './BuildControl.module.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}>Less
        </button>
        <button className={classes.More}
                onClick={props.added}>More
        </button>
    </div>
)

buildControl.PT = {
    label: PT.string
}

export default buildControl;
