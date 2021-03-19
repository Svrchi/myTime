/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// passing useState to parent component
const TodoContainer = () => {
  const [list, setList] = useState([
    {
      id: 1,
      text: 'Doctors appoinment',
    },
    {
      id: 2,
      text: 'dentist appoinment',
    },
    {
      id: 3,
      text: 'Dinner',
    },
    {
      id: 4,
      text: 'Lecture',
    },
  ]);
  // delete task function
  const deleteItem = (id) => {
    console.log('delete', id);
    setList(list.filter((listItem) => listItem.id !== id));
  };
    // add task function
  // const addTask = () => setList(list.concat(newTask));

  // create a function that adds a new todo to the current state
  // (the arguments that this function will be the new todo)
  // inside this function, you will have to create a new state
  // this is because we never want to manipulate the original state
  // create a new array, and spread the current state into the array, then add your new todo
  // const newState = [...list, <newTodo>];
  // set this new state to be the new list

  return (
    <Box className="TodoContainer">
      <Typography className="TodoHeader" variant="h5">
        Get Shit Done
      </Typography>
      {/* passing down state and functions as props */}
      {/* added ternary,if list is less than 0 show palcement text */}
      {list.length > 0 ? <TodoList list={list} onDelete={deleteItem} /> : 'What needs to be done?'}
      {' '}
      {/* pass in this new function that adds todo to todoform */}
      <TodoForm list={list} setParent={setList} />
    </Box>
  );
};

export default TodoContainer;
