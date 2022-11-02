import { IPost } from '..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostContainer, PostDescription, PostTitle } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <PostTitle>
        <h2>{post.title}</h2>
        <span>{relativeDateFormatter(post.created_at)}</span>
      </PostTitle>
      <PostDescription>{post.body}</PostDescription>
    </PostContainer>
  )
}
