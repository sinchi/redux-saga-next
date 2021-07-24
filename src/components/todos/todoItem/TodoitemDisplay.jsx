import React, {useRef, useEffect, useState} from 'react'
import { SpinnerDisplay } from '../../common';

export const TodoItemDisplay = ({title, completed, id, fetched, isActive, onItemSelected}) => {
  const ref = useRef();
  useEffect(() => {
    let popover= new bootstrap.Popover(ref.current, {
      title,
      content: `status: ${completed ? 'completed' : 'todo'}`,
      delay: { "show": 500, "hide": 100 },
      animation: true,
      customClass: 'primary',
      placement: 'top'
    })
    isActive ? popover.show() : popover.hide()
    return () => {
      popover.dispose();
    }
  }, [isActive, title, completed])

  return fetched ? (
    <li 
      ref={ref}
      onMouseOver={() => onItemSelected(id)}
      onMouseLeave={() => onItemSelected(null)}
      key={id} 
      aria-disabled={completed} 
      aria-current={isActive}
      className={
      `
        list-group-item 
        d-flex 
        justify-content-between
        align-items-start 
        ${completed ? 'disabled ' : ''}
        ${isActive ? 'active' : ''}
        
      `
      }>
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <p>
            { completed ? <del>{`${id}.${title}`}</del> : `${id}.${title}` }
          </p>
        </div>
      </div>
    </li>
  ) : <SpinnerDisplay />
}