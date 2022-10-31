import { useCallback, useState } from 'react'
import { api } from '../../lib/axios'
import { Posts } from './Posts'
import { ProfileCard } from './ProfileCard'
import { HomeContainer } from './styles'

interface Post {
  title: string
}

export function Home() {
  const [posts, setPosts] = useState<Post[]>([])

  const getPosts = useCallback(async (query: string = '') => {
    try {
      const response = await api.get(`/search/issues?q=${query}`)
    }
  }, [posts])

  return (
    <HomeContainer>
      <ProfileCard />
      <Posts />
    </HomeContainer>
  )
}
