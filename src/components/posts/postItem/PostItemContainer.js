import { connect } from 'react-redux'
import { postsSelector } from '../../../selectors'
import { commentsSelector } from '../../../selectors/commentsSelector';
import { PostItemDisplay } from './PostItemDisplay'

const mapStateToProps = (state, {id}) => {
  const posts = postsSelector(state);
  const comments = commentsSelector(state, id);
  const post = posts.find(post => post.get('id') === id)
  return {
    fetched: post !== undefined,
    postCommentsFetched: comments !== undefined,
    ...post.toJS(),
    comments,
    postId: id
  }
}

export const PostItemContainer = connect(mapStateToProps)(PostItemDisplay)