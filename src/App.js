import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

//import { GET, POST } from './libs/utils';

import './App.css';

class App extends Component {
  state = {
    todos: []
  };

  async componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=10';
    //const todos = await GET(url);
    //this.setState({ todos })
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(
      todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }) });
  }

  delTodo = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    //const res = await DELETE(url, { method: 'DELETE'});
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )]})
  }

  addTodo = async title => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const body = { title, completed: false };
    //const newTodo = await POST(url, body);
    //this.setState({ todos: [...this.state.todos, newTodo] });
  }

    render() {
        return (
          <Router>
            <div className="App">
                <div className='container'>
                    <Header />
                    <Route 
                      exact
                      path="/" 
                      render={props => (
                        <React.Fragment>
                          <AddTodo addTodo={this.addTodo} />
                          <Todos 
                              todos={this.state.todos}
                              markComplete={this.markComplete}
                              delTodo={this.delTodo}
                          />
                        </React.Fragment>
                      )}
                    />
                    <Route
                      path="/about" component={About}
                    />
                </div>
            </div>
          </Router>
        );
    }
}

export default App;
