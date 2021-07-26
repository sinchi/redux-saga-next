import React from 'react'
import { OverlayTrigger, Popover, ListGroup, Spinner } from 'react-bootstrap'

export const PostItemDisplay = ({title, body, id, fetched, isActive, onItemSelected, comments, postId, postCommentsFetched}) => {

  

  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3"><strong>Post title: </strong> {title}</Popover.Header>
      <Popover.Body>
        <h6>Comments: </h6>
        <div>
          { postCommentsFetched && comments.map(({id, name, email}) => <p key={id}><strong>{email}: </strong> {name}</p>) }
        </div>
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




