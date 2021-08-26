import {
    reducer,
    addTodos,
    removeTodos,
    updateTodos,
    completeTodos
} from './reducer';

it("testing initial state", () => {
    expect(reducer([],{})).toEqual([]);
    expect(reducer(undefined,{})).toEqual([]);
})



