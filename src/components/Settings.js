import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { editCard } from '../actions'


const SettingsCategory = ({ todos, onSelectChange }) => {
    let selectType;

    return (
    <div className='todoEditPage'>
        <div className='select'>
            <select 
                name='type' 
                ref={node => { selectType = node }} 
                onChange={(e) => {
                    e.preventDefault();

                    let typeValue = selectType.options[selectType.selectedIndex].value;
                    onSelectChange(typeValue);
                }}
            >
                <option disabled selected>Choose order mode</option>
                <option value="1">Order by id asc</option>
                <option value="-1">Order by id desc</option>
            </select>
        </div>

        <Link to="/"><button className='backButton'>Back</button></Link>
    </div>
)}


const mapStateToProps = state => {
    return {
        todos: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectChange: (typeValue) => {
            dispatch({ type: 'SORT_CARDS', sortMode: typeValue })
        }
    }
}

const Settings = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsCategory)

export default Settings