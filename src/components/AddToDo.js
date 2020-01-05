import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class AddToDo extends Component {

state = {
    title: ''
}

onChange = (e) => this.setState({ title: e.target.value});

onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
}


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input
                type="text" 
                name="title"
                style={{flex: '10', padding: '5px'}}
                placeholder="Add a todo..."
                value={this.state.title}
                onChange={this.onChange}></input>

                <input 
                type="submit"
                value="submit"
                className="btn"
                style={{flex: '1'}}
                ></input>
            </form>
        )
    }

    static propTypes = {
        addTodo: PropTypes.func.isRequired
        }
}

export default AddToDo
