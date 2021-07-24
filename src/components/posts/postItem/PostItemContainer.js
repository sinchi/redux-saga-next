import { connect } from 'react-redux'
import { postsSelector } from '../../../selectors'
import { PostItemDisplay } from './PostItemDisplay'

const mapStateToProps = (state, {id}) => {
  const posts = postsSelector(state);
  const post = posts.find(post => post.get('id') === id)
  return {
    fetched: post !== undefined,
    ...post.toJS()
  }
}

export const PostItemContainer = connect(mapStateToProps)(PostItemDisplay)