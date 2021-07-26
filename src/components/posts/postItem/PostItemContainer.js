import { connect } from 'react-redux'
import { postsSelector } from '../../../selectors'
import { commentsSelector } from '../../../selectors/commentsSelector';
import { PostItemDisplay } from './PostItemDisplay'

const mapStateToProps = (state, {id}) => {
  const posts = postsSelector(state);
  const comments = commentsSelector(state);
  const postComments = comments.find((comments, index) => index == id)
  const post = posts.find(post => post.get('id') === id)

  return {
    fetched: post !== undefined,
    postCommentsFetched: postComments !== undefined,
    ...post.toJS(),
    postComments: postComments ? Object.values(postComments)[0] : null,
    postId: id
  }
}

export const PostItemContainer = connect(mapStateToProps)(PostItemDisplay)