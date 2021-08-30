import React, { useState } from 'react';
import { addTodos, removeTodos, updateTodos, completeTodos } from '../redux/reducer';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => {
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

const STATUS = {
    ACTIVE: 'active',
    COMPLETED: 'completed',
    ALL: 'all',
}

const DisplayTodos = (props) => {
    const [status, setStatus] = useState(STATUS.ACTIVE);
    const isCompleted = props.todos.length > 0 && status === STATUS.COMPLETED;
    const isActive = props.todos.length > 0 && status === STATUS.ACTIVE;
    return (
        <div>
            {props.todos.length > 0 && <div>
                <button type="button" onClick={() => setStatus("active")}>Active</button>
                <button type="button" onClick={() => setStatus("completed")}>Completed</button>
                <button type="button" onClick={() => setStatus("all")}>All</button>
            </div>}
            <div>
                {isActive ?
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
                {isCompleted ?
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