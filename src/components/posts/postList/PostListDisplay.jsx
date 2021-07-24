import React from 'react';
import { ListContainer } from '../../common';
import { PostItemContainer } from '../postItem';

export const PostListDisplay = (props) => {
  const { posts: dataList, fetched } = props;
  
  const dataProps = {
    fetched,
    ComponentItemContainer: PostItemContainer,
    listTitle: 'Post List',
    dataList,
    itemByPage: 10
  }
  return (
    <ListContainer { ...dataProps } />
  )
}