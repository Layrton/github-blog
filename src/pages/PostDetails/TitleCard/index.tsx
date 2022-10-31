import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { TitleCardContainer, InfoTagsList, CardHeader } from './styles'

export function TitleCard() {
  return (
    <TitleCardContainer>
      <CardHeader>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>VOLTAR</span>
        </Link>
        <a href="">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <span>VER NO GITHUB</span>
        </a>
      </CardHeader>
      <h1>JavaScript data types and data structures</h1>
      <InfoTagsList>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          <span>cameronwll</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </li>
      </InfoTagsList>
    </TitleCardContainer>
  )
}
