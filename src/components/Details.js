import React from 'react'
import { Link } from 'react-router-dom';

import EditTodo from './EditTodo'


const Details = ({ match: { params } }) => {    
    return (
    <div>
        <EditTodo id={params.id}/>

        <Link to="/"><button>Back</button></Link>
    </div>
)}


// const mapStateToProps = (state, ownProps) => {
//     return {
//         id: ownProps.id
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         // onBackClick: () => {
//         //     dispatch({type: 'OPEN_DETAILS'})
//         // }
//     }
// }

// const Details = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(DetailsContainer)

export default Details