import React, { createContext, useReducer } from "react";

import todoReducer from "../reducer/todo.reducer";
import useTodoState from "../Hooks/useTodoState";

const defaultTodos = [
  { id: "1", task: "Do exercise", complete: false },
  { id: "1", task: "Buy eggs", complete: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
