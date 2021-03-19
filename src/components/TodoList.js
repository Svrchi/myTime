/* eslint-disable no-unused-vars */
import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Item from './Item';
// taking state and function as props
const TodoList = ({ list, onDelete }) => (
  <div className="listContainer">
    {/* eslint-disable-next-line no-unused-vars */}
    {list.map((item) => (
      // passing down item.id and delete function as prop to Item
      <Item key={item.id} list={item} onDelete={onDelete} />
    ))}

  </div>
);

export default TodoList;
