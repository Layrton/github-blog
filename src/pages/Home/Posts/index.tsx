import { Post } from './Post'
import {
  PostsContainer,
  PostsFormInput,
  PostsHeader,
  PostsList,
} from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <PostsHeader>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </PostsHeader>
      <form action="">
        <PostsFormInput type="text" placeholder="Buscar Conteúdo" />
      </form>
      <PostsList>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </PostsList>
    </PostsContainer>
  )
}
