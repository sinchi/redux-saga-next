import { connect } from "react-redux";
import { ListDisplay } from "./ListDisplay";

const mapStateToProps = (state, {dataList, fetched, ComponentItemContainer, listTitle, itemByPage}) => {
  return {
    dataList, 
    fetched, 
    ComponentItemContainer,
    listTitle,
    itemByPage
  }
}

export const ListContainer = connect(mapStateToProps)(ListDisplay)