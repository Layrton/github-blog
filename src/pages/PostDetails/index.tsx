import { Description } from './Description'
import { PostDetailsContainer } from './styles'
import { TitleCard } from './TitleCard'

export function PostDetails() {
  return (
    <PostDetailsContainer>
      <TitleCard />
      <Description />
    </PostDetailsContainer>
  )
}
