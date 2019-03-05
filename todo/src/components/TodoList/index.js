import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, toggleTask, deleteTask } from '../../actions';

class TodoList extends Component {
  state = {
    newTask: ''
  };

  handleChanges = e => {
    this.setState({ newTask: e.target.value });
  };
  
  addTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: '' });
  };

  toggleTask = taskId => {
    this.props.toggleTask(taskId);
  };

  deleteTask = (taskId) => {
    this.props.deleteTask(taskId);
  }



  render() {
    return (
      <>
      <div>
        <div className='todoList'>
        {this.props.todoList.map((eachTodo, index) => (
          <h4 key={index} onClick={() => this.toggleTask(index)}>
            {eachTodo.value} <span><button key={index} onClick={() => this.props.deleteTask(eachTodo.id)}>Delete</button></span>
          </h4> 
        )
        )}
        </div>

        <div>
        <form>
              <input
              type='text'
              name='newTask'
              placeholder='add a task'
              onChange={this.handleChanges}
              value={this.state.newTask}
               />
               <button onClick={this.addTask}>Add To do</button>
               <button >Clear completed</button>              
              
          </form>
        </div>    
      </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todos
})

export default connect(
  mapStateToProps,
  { addTask, toggleTask, deleteTask }
)(TodoList);
