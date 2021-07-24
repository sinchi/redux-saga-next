import React, {useRef, useEffect} from 'react'


export const PostItemDisplay = ({title, body, id, fetched, isActive, onItemSelected}) => {
  const ref = useRef();
  useEffect(() => {
    let popover= new bootstrap.Popover(ref.current, {
      title,
      content: body,
      delay: { "show": 500, "hide": 100 },
      animation: true,
      customClass: 'primary'
    })
    isActive ? popover.show() : popover.hide()
    return () => {
      popover.dispose();
    }
  }, [isActive, title, body])

  return fetched ? (
    <li 
      ref={ref}
      onMouseOver={() => onItemSelected(id)}
      onMouseLeave={() => onItemSelected(null)}
      key={id} 
      aria-current={isActive}
      className={
      `
        list-group-item 
        d-flex 
        justify-content-between
        align-items-start 
        ${isActive ? 'active' : ''}
        
      `
      }>
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          <p>{`${id}.${title}`}</p>
        </div>
        
      </div>
      
    </li>
  ) : <div className="spinner-grow text-muted"></div>
}