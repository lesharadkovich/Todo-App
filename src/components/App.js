import React from 'react'
import AddTask from './AddTodo'
import Table from './Table'
import Details from './Details'

import { Switch, Route } from 'react-router-dom';
// import history from '../history'

const App = () => (

    <Switch >
        <Route exact path="/" component={Table} />
        <Route path="/addTask" component={AddTask} />
        <Route path="/details/:id" component={Details} />
    </Switch>
)

export default App