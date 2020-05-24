import React, { useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";

import useLocalStorageState from "./Hooks/useLocalStorageState";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import useTodoState from "./Hooks/useTodoState";

const TodoApp = () => {
  const initialTodos = [{ id: 1, task: "Learn the HOOKS", completed: true }];
  const { todos, addTodo, removeTodo, updateTodo, toggleTodo } = useTodoState(
    initialTodos
  );
  return (
    <Paper
      style={{ padding: 0, margin: 0, height: "100vh", background: "#fafafa" }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todo app with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
