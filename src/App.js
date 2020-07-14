import React, { Component } from 'react';
import Layout from "./hoc/Layout/Layout"
import Quiz from './containers/quiz/Quiz'
import Quizlist from './containers/Quizlist/Quizlist'
import Auth from './containers/Auth/Auth'
import Quizcreate from './containers/Quizcreate/Quizcreate'
import {Route,Switch} from 'react-router-dom'
class App extends Component{
  render() {
    return (
     <Layout>
       <Switch>
         <Route path = '/auth' component = {Auth}/>
         <Route path = '/quiz-creater' component = {Quizcreate}/>
         <Route path = '/quiz/:id' component = {Quiz}/>
         <Route path = '/' component = {Quizlist}/>
       </Switch>
     </Layout>
    );
  }
}

export default App;
