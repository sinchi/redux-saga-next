import React, { useState } from 'react';
import { ListContainer } from '../../common';
import { TodoItemContainer } from '../todoItem';

export const TodoListDisplay = (props) => {
  const { todos: dataList, fetched } = props;
  const dataProps = {
    fetched,
    ComponentItemContainer: TodoItemContainer,
    listTitle: 'Todo List',
    dataList,
    itemByPage: 10
  }
  return (
    <ListContainer { ...dataProps } />
  )
}