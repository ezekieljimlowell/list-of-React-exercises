import DisplayTodos from '../components/DisplayTodos';
import { screen, render, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { mapStateToProps } from '../components/DisplayTodos';
import { reducer } from '../redux/reducer';
import Todos from './Todos';

it("testing mapStateToProps", () => {
    const state = [];
    expect(mapStateToProps(state).todos).toEqual([]);

    const stateItem = ["Listening", "speaking"];
    expect(mapStateToProps(stateItem).todos).toEqual(["Listening", "speaking"]);

    const statePrimitive = "travelling";
    expect(mapStateToProps(statePrimitive).todos).toEqual("travelling");
})

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
    userEvent.click(addButton1);

    const addedElement1 = screen.getByDisplayValue("running");
    expect(addedElement1).toBeInTheDocument();
    const addedElement2 = screen.getByDisplayValue("sleeping");
    expect(addedElement2).toBeInTheDocument();

    const completeButton1 = screen.getAllByRole("button", { name: /complete/i })[1];
    userEvent.click(completeButton1);
    const completeButton2 = screen.getByRole("button", { name: /Completed/i })
    userEvent.click(completeButton2);
    expect(screen.getByText("sleeping")).toBeInTheDocument();
    const doneDiv = screen.getByText("done");
    expect(doneDiv).toBeInTheDocument();
})

it("check remove button", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    const input = screen.getByPlaceholderText("update task here");
    const addTaskButton = screen.getByRole("button", { name: /Add Task/i });
    userEvent.type(input, "Walking");
    userEvent.click(addTaskButton);

    userEvent.type(input, "Searching");
    userEvent.click(addTaskButton);

    const removeButton2 = screen.getAllByRole("button", { name: /remove/i })[1];
    userEvent.click(removeButton2);
    expect(screen.queryByDisplayValue("sleeping")).not.toBeInTheDocument();
    expect(screen.getByDisplayValue("Walking")).toBeInTheDocument();
})

it("testing update and edit", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    const input = screen.getByPlaceholderText("update task here");
    const addTaskButton = screen.getByRole("button", { name: /Add Task/i });

    userEvent.type(input, "reading");
    userEvent.click(addTaskButton);

    const editButton = screen.getByRole("button", { name: /edit/i });
    const addedTask = screen.getByPlaceholderText("addedTask");
    userEvent.click(editButton);
    expect(addedTask).toHaveFocus();

    const updateButton = screen.getByRole("button", { name: /Update/i });
    addedTask.setSelectionRange(0, 7);
    userEvent.type(addedTask, "{backspace}swimming");
    userEvent.click(updateButton);
    expect(addedTask).toHaveDisplayValue("swimming");
    expect(addedTask).toBeDisabled();
})

it("testing update with empty value throws error", () => {
    renderDisplay(<>
        <DisplayTodos />
        <Todos />
    </>)

    const input = screen.getByPlaceholderText("update task here");
    const addTaskButton = screen.getByRole("button", { name: /Add Task/i });

    userEvent.type(input, "Washing cloths");
    userEvent.click(addTaskButton);

    const editButton = screen.getByRole("button", { name: /edit/i });
    const addedTask = screen.getByPlaceholderText("addedTask");
    userEvent.click(editButton);

    const updateButton = screen.getByRole("button", { name: /Update/i });
    addedTask.setSelectionRange(0, 14);
    userEvent.type(addedTask, "{backspace}");
    userEvent.click(updateButton);
    const error = screen.queryByText("cannot be empty");
    expect(error).toBeInTheDocument();

    userEvent.type(addedTask, "fishing");
    userEvent.click(updateButton);
    expect(error).not.toBeInTheDocument();
})

