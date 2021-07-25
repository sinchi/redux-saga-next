import React from 'react'
import { PostListContainer } from '../../src/components/posts'
import { Container, Col } from 'react-bootstrap'

const PostPage = () => {
  return (
    <Container>
      <Col xs={5}>
        <PostListContainer />
      </Col>
    </Container>
  )
}

export default PostPage