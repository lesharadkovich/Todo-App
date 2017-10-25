import React from 'react'
import AddTask from './AddTodo'
import Table from './Table'
import Details from './Details'

import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

const App = () => (

    <Router history={history}>
        <div>
            <Route exact path="/" component={Table} />
            <Route path="/addTask" component={AddTask} />
            <Route path="/details/:id" component={Details} />
        </div>
    </Router>
)

export default App