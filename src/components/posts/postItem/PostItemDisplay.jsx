import React from 'react'
import { OverlayTrigger, Popover, ListGroup, Spinner } from 'react-bootstrap'

export const PostItemDisplay = ({title, body, id, fetched, isActive, onItemSelected}) => {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>
        {body}
      </Popover.Body>
    </Popover>
  );

  return  (
    <ListGroup.Item
        onMouseOver={() => onItemSelected(id)}
        onMouseLeave={() => onItemSelected()}
        key={id} 
        active={isActive}>
      <OverlayTrigger 
        trigger={['hover', 'focus', 'touch']} 
        placement="right"
        overlay={popover}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p>{`${id}.${title}`}</p>
            </div>
          </div>
      </OverlayTrigger>   
    </ListGroup.Item>
  )
}




