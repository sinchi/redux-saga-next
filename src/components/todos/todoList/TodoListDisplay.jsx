import React, { useState } from 'react';
import { TodoItemContainer } from '../todoItem';

export const TodoListDisplay = (props) => {
  const { fetched, todos } = props;
  const ITEM_BY_PAGE = 10;
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(ITEM_BY_PAGE)
  const [fisrtPage, setFirstPage] = useState(true)
  const [lastPage, setLastPage] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeItemId, setActiveItemId] = useState(null);

  const NUMBER_OF_PAGES = fetched && parseInt(todos.toJS().length / ITEM_BY_PAGE);
  const handleNext = () => {
    setCurrentPage(currentPage+1)
    setFirstPage(false)
    setFrom(from+ITEM_BY_PAGE)
    setTo(to+ITEM_BY_PAGE)
    if(currentPage === NUMBER_OF_PAGES-1) {
      setLastPage(true)
    }
  }
  const handleBack = () => {
    setLastPage(false)
    setFrom(from-ITEM_BY_PAGE)
    setTo(to-ITEM_BY_PAGE)
    setCurrentPage(currentPage-1)
    if(currentPage === 2) {
      setFirstPage(true)
    } 
    
  }
  

  const onItemSelected = (id) => {
    setActiveItemId(id);
  }

  return (
    <div className="row">
      <h1>Todos List</h1>
      {
        fetched ? (
          <div className="col-4">
            <ul className="list-group mb-3" style={{cursor: 'pointer'}}>
            {
              todos.slice(from, to).map(todo => (
                <TodoItemContainer 
                  key={todo.get('id')}
                  {...todo.toJS()}
                  isActive={ activeItemId === todo.get('id') }
                  onItemSelected={onItemSelected}
                 />
              ))
            }
          </ul>
            {
              !fisrtPage && <button className="btn btn-primary me-3" onClick={handleBack} style={{marginRight: '5px', cursor: 'pointer'}}>Back</button>
            }
            {
              !lastPage && <button className="btn btn-primary" onClick={handleNext} style={{cursor: 'pointer'}}>Next</button>
            }
          <p>{currentPage}</p>
          
          </div>
        ) : (
            <div className="d-flex justify-content-center mb-5">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
            </div>
            )
      }
      
    </div>
  )
}