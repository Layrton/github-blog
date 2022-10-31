import {
  BioContainer,
  InfoTagsList,
  NameContainer,
  ProfileCardContainer,
  ProfileContentContainer,
} from './styles'
import avatarPNG from '../../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function ProfileCard() {
  return (
    <ProfileCardContainer>
      <div>
        <img src={avatarPNG} alt="" />
      </div>
      <ProfileContentContainer>
        <NameContainer>
          <div className="name">Cameron Williamson</div>
          <div className="github">
            <a href="">
              <p>GITHUB</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </NameContainer>
        <BioContainer>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </BioContainer>
        <InfoTagsList>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </li>
        </InfoTagsList>
      </ProfileContentContainer>
    </ProfileCardContainer>
  )
}
