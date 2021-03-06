import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import useInputState from "../Hooks/useInputState";
import { DispatchContext } from "../contexts/todos.context";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      // width: "25ch",
    },
  },
}));

const TodoForm = () => {
  const classes = useStyles();
  const [task, setTask, resetTask] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task });
          resetTask();
        }}
      >
        <TextField
          fullWidth
          id="standard-basic"
          label="Enter a task!"
          onChange={setTask}
          value={task}
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
