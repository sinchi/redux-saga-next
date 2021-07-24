import React, {useState} from 'react'
import { SpinnerDisplay } from '../spinner';

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
          <div className="row">
            <ul className="list-group mb-3" style={{cursor: 'pointer'}}>
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
          </ul>
            
          <div className="col-3 mb-3">
          {
              !fisrtPage && <button className="btn btn-primary me-3" onClick={handleBack} style={{marginRight: '5px', cursor: 'pointer'}}>Back</button>
            }
            {
              !lastPage && 
              <button className="btn btn-primary" onClick={handleNext} style={{cursor: 'pointer'}}>
                Next <i className="fas fa-arrow-right"></i>
              </button>
            }
          </div>
          
          </div>
        ) : (
            <SpinnerDisplay />
          )
      }
      
    </>
  )
}