import React from 'react'
import functionMap from './functionMap'
import classes from './General.module.css'


function Health(props) {
    const elemtn=functionMap(props.data)

    return (
        <div className={classes.general}>
            {elemtn}
        </div>
    )
}

export default React.memo(Health)