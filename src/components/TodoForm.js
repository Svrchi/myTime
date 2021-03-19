/* eslint-disable no-unused-vars */
// rafce imports react, exports and creates function
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// ensure that your todoform is accepting props
function TodoForm({ list, setParent }) {
  const [task, setTask] = useState('');

  // check if task has already been submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskText = e.target.value;
    const newId = list.length + 1;
    console.log('new id', newId);
    setTask({ id: newId, text: taskText });
    // return console.log(`Submitting task: ${task}`);
  };

  const addTask = (e) => {
    console.log('adding task:', task);
    e.preventDefault();
    setParent(list.concat(task));
    // setTask('');
  };

  return (
    <div className="formAndButton">
      {/* onChange should invoke a function on line 16 */}
      <TextField className="todoInput" label="Task name..." variant="filled" size="small" value={task.text} onChange={(e) => handleSubmit(e)} />
      {/* onSubmit (this is a react method) invoke this function on line 11 */}
      {/* event handler can take a function but not a function call */}
      {/*  hence why parenthesis arnt used to invoke the contained function */}
      <Button className="submitButton" variant="contained" color="primary" type="submit" onClick={addTask}>
        Submit
      </Button>
    </div>
  );
}

export default TodoForm;

// onChange={(e) => setTask(e.target.vaule)}

/*

const state = [{}, {}, {}];

function addToForm(newTask){
  state.push(newTask)
}

//pass down functionality to children

<renderForm addToForm={addToForm}/>

******

const newInput = 'new task';

function renderForm(props){

  function onSubmit(){
    props.addToForm(newInput);
  }

  return
  <form>
    <button onSubmit={onSubmit} >submit your task</button>
  </form>
}
*****

function renderTask(state){
  return render state;
}
*/
