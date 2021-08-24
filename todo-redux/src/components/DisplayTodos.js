import React, { useState } from 'react';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = () => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
        removeTodo: (id) => dispatch(removeTodos(id)),
        updateTodo: (obj) => dispatch(updateTodos(obj)),
        completeTodo: (id) => dispatch(completeTodos(id)),
    };
};

const DisplayTodos = (props) => {
    const [status, setStatus] = useState("active"); 
    return (
        <div>
            <div>
                <button type="button" onClick={() => setStatus("active")}>Active</button>
                <button type="button" onClick={() => setStatus("completed")}>Completed</button>
                <button type="button" onClick={() => setStatus("all")}>All</button>
            </div>
            <div>
                
            </div>
        </div> 
    )
}
