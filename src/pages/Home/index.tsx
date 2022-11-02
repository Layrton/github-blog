import { Posts } from './Posts'
import { ProfileCard } from './ProfileCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <ProfileCard />

      <Posts />
    </HomeContainer>
  )
}
