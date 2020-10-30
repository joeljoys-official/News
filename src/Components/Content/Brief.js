import React from 'react'
import {Link} from 'react-router-dom'

const Brief = (props) => {
    const data={}
    const query=new URLSearchParams(props.location.search)
    for (let param of query.entries()){

        data[param[0]]=param[1]
    }

    
    return (
        <a href={data.link}  target="_blank">
            <img src={data.url} alt={data.title} style={{height:"40vh",objectFit:"contain",textAlign:"center",display:" block",
          marginLeft: "auto",
          marginRight: "auto",

        
        
        }}></img>
            <h3 style={{textAlign:"center"}}>{data.title}</h3>
            <p style={{textAlign:"center"}}>{data.description}</p>
            <p style={{textAlign:"center"}} >
                <span style={{backgroundColor:"green",padding:"5px"}}>Click to go to read full news</span></p>
            </a>
    )
}

export default Brief
