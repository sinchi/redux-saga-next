import React from 'react'
import { SpinnerDisplay } from '../../common';
import { OverlayTrigger, Popover, ListGroup } from 'react-bootstrap'

export const PostItemDisplay = ({title, body, id, fetched, isActive, onItemSelected}) => {

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>
        {body}
      </Popover.Body>
    </Popover>
  );

  return fetched ? (
    <ListGroup.Item
        onMouseOver={() => onItemSelected(id)}
        onMouseLeave={() => onItemSelected()}
        key={id} 
        active={isActive}>
      <OverlayTrigger 
        trigger={['hover', 'focus', 'touch']} 
        placement="bottom"
        overlay={popover}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <p>{`${id}.${title}`}</p>
            </div>
          </div>
      </OverlayTrigger>   
    </ListGroup.Item>
    
  ) : <SpinnerDisplay />
}




