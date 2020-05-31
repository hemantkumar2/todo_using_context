import React, { useContext } from "react";
import useToggleState from "../Hooks/useToggleState";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import { TodosContext, DispatchContext } from "../contexts/todos.context";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ id, task, completed }) => {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <ListItem>
          <Checkbox
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id })}
            >
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
