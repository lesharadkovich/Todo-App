import React from 'react'
import AddTask from './AddTodo'
import Table from './Table'
import Details from './Details'
import Settings from './Settings'

import { Switch, Route, Link } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <div></div>
            <h1>Todo Application</h1>

            <div className='topButtons'>
                <Link to="/addTask"><i className="fa fa-plus-circle fa-4x addTaskButton"></i></Link>
                <Link to="/settings"><i className="fa fa-cog fa-4x settingsButton"></i></Link>
            </div>
        </header>

        <Switch >
            <Route exact path="/" component={Table} />
            <Route path="/addTask" component={AddTask} />
            <Route path="/details/:id" component={Details} />
            <Route path="/settings" component={Settings} />
        </Switch>
    </div>
)

export default App