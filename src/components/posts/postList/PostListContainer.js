import { connect } from 'react-redux'
import { postsSelector } from '../../../selectors'
import { PostListDisplay } from './PostListDisplay'

const mapStateToProps = (state) => {
  const posts = postsSelector(state)
  return {
    fetched: posts!== null,
    posts
  }
}

export const PostListContainer = connect(mapStateToProps)(PostListDisplay)