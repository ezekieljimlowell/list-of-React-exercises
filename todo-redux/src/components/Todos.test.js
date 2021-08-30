import React from 'react';
import Todos from './Todos';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../redux/reducer';
import { mapStateToProps } from './Todos';

const renderTodos = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    };
};

it("testing mapStateToProps", () => {
    const state = [];
    expect(mapStateToProps(state).todos).toEqual([]);

    const stateItem = ["learning", "eating"];
    expect(mapStateToProps(stateItem).todos).toEqual(["learning", "eating"]);
});

it("check addtask click handler", () => {
    renderTodos(<Todos />);

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "cooking");

    const button = screen.getByRole("button", { name: /Add Task/i })
    userEvent.click(button);

    const addedTask = screen.getByText("cooking");
    expect(addedTask).toBeInTheDocument();
    expect(input).toHaveValue(""); //reset
});

it("check for error if empty task given", () => {
    renderTodos(<Todos />);

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "");
    const button = screen.getByRole("button", { name: /Add Task/i });
    userEvent.click(button);
    const error = screen.getByText("Please provide task name");
    expect(error).toBeInTheDocument();
    //check with added task
    userEvent.type(input, "Handling errors");
    userEvent.click(button);
    const errorTask = screen.queryByText("Please provide task name")
    expect(errorTask).not.toBeInTheDocument();
});