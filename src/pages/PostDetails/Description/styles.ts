import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }

  ul {
    list-style-type: inherit;
    padding-left: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme.blue};
    line-height: 160%;
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;
    > div {
      background: transparent !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'Fira Code', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
