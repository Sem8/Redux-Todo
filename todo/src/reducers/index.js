import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, PRIORITIZE_TASK } from '../actions';

const initialState = {
    todos: [
        { value: 'Walk the dog',
          completed: false            
      }    
    ]       
};

const taskReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_TASK:
        const newTask = {
            value: action.payload,
            completed: false,
            id: Math.random()
        }
            return {
                ...state,
                todos: [...state.todos, newTask]
            };
        
        case DELETE_TASK:
            return {
                ...state,
                todos: state.todos.filter(eachTodo => eachTodo.id !== action.payload)
            };
        
        case TOGGLE_TASK:
            return {
                ...state,
                todos: state.todos.map(eachTodo => {
                    if(eachTodo.id === action.payload) {
                        return {
                            ...eachTodo,
                            completed: !eachTodo.completed
                        };
                    }
                    return eachTodo;
                })
            };

            case PRIORITIZE_TASK:
                return {
                    ...state,
                    todos: state.todos.filter(eachTodo => eachTodo.id === action.payload)
                };
           
            default:
                return state;                   
    }    
}

export default taskReducer;