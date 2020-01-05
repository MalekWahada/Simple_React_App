import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 
                            'line-through' : 'none'
        }
    }



    

    render() {
        // destructring:  to pull variables out
const { id, title} = this.props.todo

        return (  
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" 
                    onChange={this.props.markComplete.bind(this, id)}></input> {' '}
                    {title}
                    <button onClick={this.props.delToDo.bind(this, id)} 
                    style={btnStyle}>X</button>
                    </p>
            </div>
        )
    }
}


// btn style
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

// set the props types
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delToDo: PropTypes.func.isRequired
}


export default Todoitem
