import React, {useState} from 'react'
import { SpinnerDisplay } from '../spinner';
import {  FaRegHandPointRight, FaRegHandPointLeft } from "react-icons/fa";
import { ListGroup, Row, Col, Button } from 'react-bootstrap'

export const ListDisplay = ({dataList, fetched, ComponentItemContainer, listTitle, itemByPage}) => {
  const ITEM_BY_PAGE = itemByPage;
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(ITEM_BY_PAGE)
  const [fisrtPage, setFirstPage] = useState(true)
  const [lastPage, setLastPage] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeItemId, setActiveItemId] = useState(null);

  const NUMBER_OF_PAGES = fetched && parseInt(dataList.toJS().length / ITEM_BY_PAGE);
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
    <>
      <h1>{ listTitle }</h1>
      {
        fetched ? (
          <Row>
            <ListGroup className="mb-3" style={{cursor: 'pointer'}}>
            {
              dataList.slice(from, to).map(dataItem => (
                <ComponentItemContainer 
                  key={dataItem.get('id')}
                  {...dataItem.toJS()}
                  isActive={ activeItemId === dataItem.get('id') }
                  onItemSelected={onItemSelected}
                 />
              ))
            }
          </ListGroup>
            
          <Col xs={4} className="mb-3">
          {
              !fisrtPage && 
              <Button className="btn btn-primary me-3" onClick={handleBack} style={{marginRight: '5px', cursor: 'pointer'}}>
                <FaRegHandPointLeft />
               </Button>
            }
            {
              !lastPage && 
              <Button className="btn btn-primary" onClick={handleNext} style={{cursor: 'pointer'}}>
                 <FaRegHandPointRight />
              </Button>
            }
          </Col>
          
          </Row>
        ) : (
            <SpinnerDisplay />
          )
      }
      
    </>
  )
}