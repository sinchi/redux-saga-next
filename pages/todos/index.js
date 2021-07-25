import React from 'react'
import { TodoListContainer } from '../../src/components/todos'
import { Col, Container } from 'react-bootstrap'
const TodosPage = () => {
  return (
    <Container>
      <Col xs={5}>
        <TodoListContainer />
      </Col>
    </Container>
  )
}

export default TodosPage