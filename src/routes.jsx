import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage.jsx'
import Clock from './Clock'
import ToDo from './ToDo'
import Timer from './Timer'
import ATM from './ATM'
import Giphy from './Giphy'


function Routes(){
    return (

        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/clock' exact component={Clock}/>
          <Route path='/todo' exact component={ToDo}/>
          <Route path='/timer' exact component={Timer}/>
          <Route path='/atm' exact component={ATM}/>
          <Route path='/giphy' exact component={Giphy}/>
          
          
      </Switch>
        
    )
}

export default Routes