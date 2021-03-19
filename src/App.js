/* eslint-disable no-unused-vars */
import './index.css';
import React from 'react';
import Box from '@material-ui/core/Box';
import TodoList from './components/TodoList';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoContainer from './components/TodoContainer';
// React basically renders a language called JSX
// which is a mix of Javascript and XML (XML is a markup language)
// Think of XML as 'fancy' HTML
// If you are simply rendering 'hello'
function App() {
  return (
    <div className="wrapper">
      <Header />
      <TodoContainer />
    </div>
  );
}
export default App;
