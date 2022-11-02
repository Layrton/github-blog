import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { relativeDateFormatter } from '../../../utils/formatter'
import { IPost } from '../../Home/Posts'
import { TitleCardContainer, InfoTagsList, CardHeader } from './styles'

interface TitleCardProps {
  postData: IPost
  isLoading: boolean
}

export function TitleCard({ postData, isLoading }: TitleCardProps) {
  return (
    <TitleCardContainer>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <CardHeader>
            <Link to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>VOLTAR</span>
            </Link>
            <a href={postData.html_url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              <span>VER NO GITHUB</span>
            </a>
          </CardHeader>
          <h1>{postData.title}</h1>
          <InfoTagsList>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <span>{postData.user?.login}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{relativeDateFormatter(postData?.created_at)}</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              <span>{postData.comments} comentários</span>
            </li>
          </InfoTagsList>
        </>
      )}
    </TitleCardContainer>
  )
}
