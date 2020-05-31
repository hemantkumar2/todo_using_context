import React, { createContext } from "react";

import { useLocalStorageReducer } from "../Hooks/useLocalStorageReducer";
import todoReducer from "../reducer/todo.reducer";

const defaultTodos = [
  { id: "1", task: "Do exercise", complete: false },
  { id: "2", task: "Buy eggs", complete: true },
];
export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
