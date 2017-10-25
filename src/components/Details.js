import React from 'react'
import { connect } from 'react-redux'

const DetailsContainer = ({todoCard, onBackClick}) => (
    <div>
        <div></div>

        <button 
            onClick={e => {
                e.preventDefault()
                onBackClick()
            }}
        >
            Back
        </button>
    </div>
)


const mapStateToProps = (state, ownProps) => {
    return {
        // todoCard: getTodos(state.todos, ownProps.category)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onBackClick: () => {
            dispatch({type: 'OPEN_DETAILS'})
        }
    }
}

const Details = connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsContainer)

export default Details