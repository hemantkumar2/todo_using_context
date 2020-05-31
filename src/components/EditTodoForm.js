import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";

import useInputState from "../Hooks/useInputState";
import { TodosContext } from "../contexts/todos.context";

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task);
  const { updateTodo } = useContext(TodosContext);
  return (
    <form
      style={{ marginLeft: "1.6rem", width: "50%" }}
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
