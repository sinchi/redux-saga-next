import React from 'react'
import { OverlayTrigger, Popover, ListGroup, Spinner } from 'react-bootstrap'


export const TodoItemDisplay = ({title, completed, id, fetched, isActive, onItemSelected}) => {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>
        {title}
      </Popover.Body>
    </Popover>
  );


  return (
      <ListGroup.Item
          onMouseOver={() => onItemSelected(id)}
          onMouseLeave={() => onItemSelected(null)}
          key={id} 
          active={isActive}
          disabled={completed}>
        <OverlayTrigger 
          trigger={['hover', 'focus', 'touch']} 
          placement="right"
          overlay={popover}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p>
                { completed ? <del>{`${id}.${title}`}</del> : `${id}.${title}` }
              </p>
            </div>
          </div>
        </OverlayTrigger>   
      </ListGroup.Item>
    )

}




