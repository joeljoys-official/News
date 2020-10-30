import React, { Component } from 'react'
import Axios from 'axios'
import General from './Components/General'
import Business from './Components/Business'
import Entertainment from './Components/Entertainment'
import Health from './Components/Health'
import Science from './Components/Science'
import Sports from './Components/Sports'
import Technology from './Components/Technology'
import { Route ,Switch ,NavLink} from 'react-router-dom'
import Brief from './Components/Content/Brief'
import classes from './App.module.css'
import Spinner from './Components/Spinner'

const categories=['General', 'Business', 'Entertainment', 'Health', 'Science', 'Sports','Technology']
export class App extends Component {
  state={
    General:[],
     Business:[],
     Entertainment:[],
     Health:[],
     Science:[],
     Sports:[],
     Technology:[],
     loading:false
  }


  componentDidMount(){
    this.setState({loading:true})
    categories.map(category=>{
      return Axios.get('http://newsapi.org/v2/top-headlines',{
        params:{
          country:'in',
          category:category,
          apiKey:'a12cea08bb7944f3b75b64c2ac8ab070',
        }
      })
      .then(Response=>{
        this.setState({[category]:Response.data.articles})
        if(category==='Technology')
        {
          this.setState({loading:false})
        }
      })

      
    })
  }
  render() {
    let content=(<div 
    style={{
      height:"90vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"}}>
      
      <Spinner/>
      </div>)

      if(!this.state.loading)
      {
        content=(<Switch>
          <Route path="/brief" component={Brief} exact/>
          <Route path="/" 
          component={() => <General data={this.state.General} />} exact/>
          <Route path="/business" 
          component={() => <Business data={this.state.Business} />} exact/>
          <Route path="/entertainment" 
          component={() => <Entertainment data={this.state.Business} />} exact/>
          <Route path="/health" 
          component={() => <Health data={this.state.Health} />} exact/>
          <Route path="/science" 
          component={() => <Science data={this.state.Science} />} exact/>
          <Route path="/sports" 
          component={() => <Sports data={this.state.Sports} />} exact/>
          <Route path="/technology" 
          component={() => <Technology data={this.state.Technology} />} exact/>
          
          </Switch>)
      }

    return (
      <>
        {<p></p>}
      <div className={classes.Links}>
        
        <NavLink to="/" activeClassName={classes.LinkEL} exact>General</NavLink>
        <NavLink to="/business"  activeClassName={classes.LinkEL}>Business</NavLink>
        <NavLink to="/entertainment"  activeClassName={classes.LinkEL}>Entertainment</NavLink>
        <NavLink to="/health"  activeClassName={classes.LinkEL}>Health</NavLink>
        <NavLink to="/sports"  activeClassName={classes.LinkEL}>Science</NavLink>
        <NavLink to="/science"  activeClassName={classes.LinkEL}>Sports</NavLink>
        <NavLink to="/technology" activeClassName={classes.LinkEL} >Technology</NavLink>
        </div>

        {content}
      </>
    )
  }
}

export default App
