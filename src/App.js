import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddToDo from './components/AddToDo';
import uuid from 'uuid';
import About from './components/pages/About';
import Axios from 'axios';




class App extends Component {


state = {
  todos: []
}

componentDidMount() {
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  .then(res => this.setState({todos: res.data}));
}

// toggle checkbox
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}



// delete a todo
delToDo = (id) => {

  Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
  .then(res => this.setState({ 
    todos: [...this.state.todos.filter(todo => todo.id!== id)]}))
  
}


// add a todo
addTodo = (title) => {

  // const newTodo = {
  //   id: uuid.v4(),
  //   title,
  //   completed: false
  // }

  Axios.post('https://jsonplaceholder.typicode.com/todos',{
    title,
    completed: false
  })
  .then(res => this.setState({ 
    todos: [...this.state.todos, res.data]}));
}

  render() {

  return (

    <Router>
    <div className="App">
      <div className="container">

      <Header></Header>
      <Route exact path="/" render={props => (
        <React.Fragment>
        
          <AddToDo addTodo={this.addTodo}></AddToDo>
          <Todos todos={this.state.todos} 
          markComplete={this.markComplete}
          delToDo={this.delToDo}>
           </Todos>

        </React.Fragment>
      )}></Route>

<Route path="/about" component={About}>

</Route>

      

      </div>
      
    </div>
    </Router>
  );

}
}

export default App;
