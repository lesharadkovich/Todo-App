import React from 'react'
import AddTask from './AddTodo'
import Table from './Table'
import Details from './Details'

import { Switch, Route, Link } from 'react-router-dom';
// import history from '../history'

const App = () => (
    <div>
        <header>
            <div></div>
            <h1>Todo Application</h1>

            <Link to="/addTask"><div className='addTaskButton'>+</div></Link>
        </header>

        <Switch >
            <Route exact path="/" component={Table} />
            <Route path="/addTask" component={AddTask} />
            <Route path="/details/:id" component={Details} />
        </Switch>
    </div>
)

export default App