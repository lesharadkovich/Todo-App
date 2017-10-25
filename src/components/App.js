// import React from 'react'
// import Content from './Content'

// import { Router, Route, Link } from 'react-router';
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory();

// const App = () => (
    
//        <Router history={history}>
//           <div>
//             <ul>
//               <li><Link to="/addTask">add task</Link></li>
//             </ul>
    
    
//            <hr />
//             <Route exact path="/" component={VisibleTodoList} />
//             <Route path="/addTask" component={AddTask} />
//             {/* <Route path="/details" component={Details} /> */}
//           </div>
//         </Router>
//     )

// const App = () => (
//     <div>
//         {/* <h1>TODO APP</h1> */}
//         <Content></Content>
//     </div>
// )

// export default App


import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'
import Details from './Details'

const AppContainer = ({filter}) => {
    if(filter === 'Table') {
        return <Table></Table>
    } else {
        return <Details></Details>
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.visibilityFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // onClick: id => {
        //     dispatch(setVisibilityFilter(ownProps.filter))
        // }
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer)

export default App