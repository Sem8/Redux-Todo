import React, { Component } from 'react';
import './App.css';
import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>To do App</h1>
        <TodoList />
        {/* <TodoForm /> */}
        
      </div>
    );
  }
}

export default App;
