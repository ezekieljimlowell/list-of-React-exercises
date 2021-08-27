import {
    reducer,
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos
} from './reducer';

it("testing initial state", () => {
    expect(reducer([], {})).toEqual([]);
    expect(reducer(undefined, {})).toEqual([]);
})

it("testing add Todos", () => {
    expect(reducer([], addTodos("Walking"))).toEqual(["Walking"]);
})

it("testing remove", () => {
    const removeTask = reducer(
        [
            { id: "1", item: "run", completed: false },
            { id: "2", item: "learn", completed: false },
            { id: "3", item: "listen", completed: true }
        ], removeTodos("2"));
    expect(removeTask).toEqual([{ id: "1", item: "run", completed: false }, { id: "3", item: "listen", completed: true }])
})

//try with diiferent id

it("testing updated", () => {
    const updateTask = reducer(
        [
            { id: "1", item: "run", completed: false },
            { id: "2", item: "learn", completed: false },
            { id: "3", item: "listen", completed: true }
        ], updateTodos({ id: "3", item: "speak" })
    )
    expect(updateTask).toEqual([
        { id: "1", item: "run", completed: false },
        { id: "2", item: "learn", completed: false },
        { id: "3", item: "speak", completed: true }
    ])
})

it("testing completed booleon", () => {
    const completedTask = reducer([
        { id: "1", item: "run", completed: false },
        { id: "2", item: "learn", completed: false }, //for true
        { id: "3", item: "listen", completed: true }
    ], completeTodos("2"))

    expect(completedTask).toEqual([
        { id: "1", item: "run", completed: false },
        { id: "2", item: "learn", completed: true },
        { id: "3", item: "listen", completed: true }
    ])
})



