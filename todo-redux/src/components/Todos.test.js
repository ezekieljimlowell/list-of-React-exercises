import React from 'react';
import Todos from './Todos';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../redux/reducer';
import TodoItem from './TodoItem';

const renderTodos = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

it("adding input task", () => {
    renderTodos(<Todos />);

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "running");
    expect(input).toBeInTheDocument("running");
})

it("check addtask click handler", () => {
    renderTodos(<Todos />);

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "cooking");

    const button = screen.getByRole("button", { name: /Add Task/i })
    userEvent.click(button);

    const addedTask = screen.getByText("cooking");
    expect(addedTask).toBeInTheDocument;
})

it("check for error if empty task given", () => {
    renderTodos(<Todos />);

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "");
    const button = screen.getByRole("button", { name: /Add Task/i });
    userEvent.click(button);
    const error = screen.getByText("Please provide task name");
    expect(error).toBeInTheDocument();
})