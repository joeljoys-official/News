import classes from './General.module.css'
import React from 'react'
import functionMap from './functionMap'


function General(props) {
    const elemtn=functionMap(props.data)

    return (
        <div className={classes.general}>
            {elemtn}
        </div>
    )
}

export default React.memo(General)
