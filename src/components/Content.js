import React from 'react'
import { connect } from 'react-redux'
import Table from './Table'
import Details from './Details'

const ContentContainer = ({filter}) => {
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

const Content = connect(
    mapStateToProps,
    mapDispatchToProps
)(ContentContainer)

export default Content