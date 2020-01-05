import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} markComplete=
            {this.props.markComplete}
            delToDo={this.props.delToDo}
            ></Todoitem>
        ));
    }
}

// set the props types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delToDo: PropTypes.func.isRequired
  
}

export default Todos;
