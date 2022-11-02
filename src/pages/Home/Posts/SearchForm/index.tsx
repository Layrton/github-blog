import { PostsFormInput, PostsHeader } from './styles'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInput = zod.infer<typeof searchFormSchema>

interface SearchInputProps {
  postsLength: number
  getPosts: (query?: string) => Promise<void>
}

export function SearchForm({ postsLength, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <>
      <PostsHeader>
        <h2>Publicações</h2>
        <span>{postsLength} publicações</span>
      </PostsHeader>
      <form action="" onSubmit={handleSubmit(handleSearchPosts)}>
        <PostsFormInput
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
      </form>
    </>
  )
}
