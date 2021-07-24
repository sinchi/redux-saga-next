import { connect } from "react-redux";
import { PopoverDisplay } from "./PopoverDisplay";


const mapPropsToState = (state, todo) => {
  return {
    ...todo
  }
}

export const PopoverContainer = connect(mapPropsToState)(PopoverDisplay)