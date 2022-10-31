import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 50px;
`

export const PostsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.75rem;

  > h2 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const PostsFormInput = styled.input`
  background: ${(props) => props.theme['base-input']};
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-border']};
  border-radius: 6px;
  margin-bottom: 3rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
