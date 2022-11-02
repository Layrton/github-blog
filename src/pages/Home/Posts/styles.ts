import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 50px;
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
`
