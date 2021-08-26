import React, { useState } from 'react';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
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
            {props.todos.length > 0 && <div>
                <button type="button" onClick={() => setStatus("active")}>Active</button>
                <button type="button" onClick={() => setStatus("completed")}>Completed</button>
                <button type="button" onClick={() => setStatus("all")}>All</button>
            </div>}
            <div>
                {props.todos.length > 0 && status === "active" ?
                    props.todos.map((item) => {
                        return (
                            item.completed === false && (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        )
                    }) : null
                }
                {props.todos.length > 0 && status === "completed" ?
                    props.todos.map((item) => {
                        return (
                            item.completed && (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    removeTodo={props.removeTodo}
                                    updateTodo={props.updateTodo}
                                    completeTodo={props.completeTodo}
                                />
                            )
                        )
                    }) : null
                }
                {props.todos.length > 0 && status === "all" ?
                    props.todos.map((item) => {
                        console.log(item);
                        return (
                            <TodoItem
                                key={item.id}
                                item={item}
                                removeTodo={props.removeTodo}
                                updateTodo={props.updateTodo}
                                completeTodo={props.completeTodo}
                            />
                        )
                    }) : null
                }
            </div>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);