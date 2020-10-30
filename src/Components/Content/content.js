import React from 'react'
import classes from './Content.module.css'

const content = (props) => {
    var date=new Date(props.date)
    let day=date.getDate()
    let month=date.getMonth()
    let year=date.getFullYear()
    return (
        <div className={classes.content}>
            <div className={classes.imgContainer}>
            <img src={props.thumbnail} alt={props.title} className={classes.img}/>
            </div>
            <h3 className={classes.title}>{props.title}</h3> 
            <p className={classes.description}>{props.description}</p>
    <p className={classes.date}>{day}/{month}/{year}</p>
        </div>
    )
}

export default content
