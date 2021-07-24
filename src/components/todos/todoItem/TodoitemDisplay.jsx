import React, {useRef, useEffect, useState} from 'react'

export const TodoItemDisplay = ({title, completed, id, fetched, isActive, onItemSelected}) => {
  const ref = useRef();
  useEffect(() => {
    let popover= new bootstrap.Popover(ref.current, {
      trigger: 'focus',
      title,
      content: `status: ${completed ? 'completed' : 'todo'}`,
      delay: { "show": 500, "hide": 100 }
    })
    isActive ? popover.show() : popover.hide()
    return () => {
      popover.dispose();
    }
  }, [isActive, title, completed])

  return fetched ? (
    <li 
      ref={ref}
      onClick={() => onItemSelected(id)}
      key={id} 
      aria-disabled={completed} 
      aria-current={isActive}
      className={
      `
        list-group-item 
        d-flex 
        justify-content-between
        align-items-start 
        ${completed ? 'disabled' : ''}
        ${isActive ? 'active' : ''}
      `
      }>
      <div className="ms-2 me-auto">
        <div className="fw-bold">{`${id}.${title}`}</div>
      </div>
      
    </li>
  ) : <div className="spinner-grow text-muted"></div>
}