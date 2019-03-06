import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';

export default class TodoForm extends Component {
  


  render() {
    return (
      <div>
          <form>
              <input
              type='text'
              name='task'
              placeholder='add a task'
               />
               <button>Add To do</button>
               <button>Clear completed</button>              
              
          </form>
        
      </div>
    )
  }
}

const mapStateToProps = state => {
  todoInput: state
}

// export default connect(mapStateToProps, {addTask})(TodoForm)