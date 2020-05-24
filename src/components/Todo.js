import React from "react";
import useToggleState from "../Hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import EditTodoForm from "./EditTodoForm";

const Todo = ({ id, task, completed, removeTodo, toggleTodo, updateTodo }) => {
  const [isEditing, toggle] = useToggleState(false);
  return (
    <>
      {isEditing ? (
        <EditTodoForm
          updateTodo={updateTodo}
          id={id}
          task={task}
          toggleEditForm={toggle}
        />
      ) : (
        <ListItem>
          <Checkbox checked={completed} onClick={() => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => toggle(!isEditing)}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </>
  );
};
export default Todo;
