import React from 'react'
import Content from './Content/content'
import {Link,withRouter} from 'react-router-dom'

const functionMap=(data)=>(
data.map(el=>{
        return <Link to={{
            pathname:"/brief",
            search:`title=${el.title}&description=${el.description}&url=${el.urlToImage}&link=${el.url}`
        }} key={el.title}><Content thumbnail={el.urlToImage} 
        title={el.title} description={el.description} date={el.publishedAt}
        />
        </Link>
    })
)
export default functionMap