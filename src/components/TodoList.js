import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch the to-do list data from the API
    const fetchTodos = async () => {
      const response = await fetch('https://dummyjson.com/todo-list');
      if (response.ok) {
        const todoData = await response.json();
        setTodos(todoData);
      } else {
        // Handle fetch error
      }
    };

    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <ListItemText primary={todo.title} secondary={todo.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoList;
