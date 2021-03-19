/* eslint-disable no-unused-vars */
import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
// taking in state and function as props
const Item = ({ list, onDelete }) => (
  // reconsider using li
  <li className="listItem">
    {list.text}
    {/* <p className="date">{list.day}</p> */}
    {/* consider an x icon instead of bin */}
    {/* applying functionality and state to icon via prop drilling */}
    <DeleteOutlineIcon className="deleteTask" fontSize="small" onClick={() => onDelete(list.id)} />
  </li>
);

export default Item;
