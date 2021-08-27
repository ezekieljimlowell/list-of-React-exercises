import DisplayTodos from '../components/DisplayTodos';
import { screen, render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { mapStateToProps, mapDispatchToProps } from '../components/DisplayTodos';
import {
    reducer,
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos
} from '../redux/reducer';
import Todos from './Todos';

const renderDisplay = (
    component,
    { initialState, store = createStore(reducer, initialState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{component}</Provider>),
        store,
    }
}

it("check display Todos for added task", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "running");
    const addButton = screen.getByRole("button", { name: /Add Task/i });
    userEvent.click(addButton);

    //const result = screen.getByTestId("addedTask");
    //const result = screen.getByDisplayValue("running");
    const result = screen.getAllByText("running")[0];
    expect(result).toBeInTheDocument();
})

it("check in all and active task", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "running");
    const addButton = screen.getByRole("button", { name: /Add Task/i });
    userEvent.click(addButton);

    userEvent.click(screen.getByRole("button", { name: /Active/i }));
    const result1 = screen.getAllByText("running")[0];
    expect(result1).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: /All/i }))
    const result2 = screen.getAllByText("running")[0];
    expect(result2).toBeInTheDocument();
})

it("check completed task", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)
    const input = screen.getByPlaceholderText("update task here");
    userEvent.type(input, "running");
    const addButton1 = screen.getByRole("button", { name: /Add Task/i });
    userEvent.click(addButton1);

    userEvent.type(input, "sleeping");
    const addButton2 = screen.getByRole("button", { name: /Add Task/i });
    userEvent.click(addButton2);

    const addedElement1 = screen.getByDisplayValue("running");
    expect(addedElement1).toBeInTheDocument();
    const addedElement2 = screen.getByDisplayValue("sleeping");
    expect(addedElement2).toBeInTheDocument();

    const completeButton1 = screen.getAllByRole("button", { name: /complete/i })[1];
    userEvent.click(completeButton1);
    const completeButton2 = screen.getByRole("button", { name: /Completed/i })
    userEvent.click(completeButton2);
    expect(screen.getByText("sleeping")).toBeInTheDocument();
})

it("check remove button", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    userEvent.type(screen.getByPlaceholderText("update task here"), "Walking");
    userEvent.click(screen.getByRole("button", { name: /Add Task/i }));

    userEvent.type(screen.getByPlaceholderText("update task here"), "Searching");
    userEvent.click(screen.getByRole("button", { name: /Add Task/i }));

    userEvent.click(screen.getAllByRole("button", { name: /remove/i })[1]);
    expect(screen.queryByDisplayValue("sleeping")).not.toBeInTheDocument();
    expect(screen.getByDisplayValue("Walking")).toBeInTheDocument();
})

it("check with edit and updated", () => {
    // TODO: intergration vs unit testing
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    const updateTaskInput = screen.getByPlaceholderText("update task here");
    const addTaskBtn = screen.getByRole("button", { name: /Add Task/i });
    userEvent.type(updateTaskInput, "House maintenance");
    userEvent.click(addTaskBtn);
    userEvent.type(updateTaskInput, "Hair cut");
    userEvent.click(addTaskBtn);
    userEvent.click(screen.getAllByRole("button", { name: /edit/i })[0]);
    expect(screen.getByDisplayValue("House maintenance")).toHaveFocus();

    fireEvent.keyPress(screen.getByDisplayValue("House maintenance"), {key: "Watering plants"});
    //fireEvent.keyPress(screen.getByDisplayValue("House maintenance"), { key: "Enter", code: "Enter" });
    expect(screen.getByDisplayValue("Watering plants")).toBeInTheDocument();
})


