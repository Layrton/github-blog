import {
  BioContainer,
  InfoTagsList,
  NameContainer,
  ProfileCardContainer,
  ProfileContentContainer,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useCallback, useEffect, useState } from 'react';
import { api } from '../../../lib/axios';

const username = 'layrton';
// const repoName = 'github-blog'

interface ProfileData {
  login: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company?: string;
  followers: number;
}

export function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  const getProfileData = useCallback(async () => {
    try {
      const response = await api.get(`/users/${username}`);
      setProfileData(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  return (
    <ProfileCardContainer>
      <div>
        <img src={profileData.avatar_url} alt="" />
      </div>
      <ProfileContentContainer>
        <NameContainer>
          <div className="name">{profileData.name}</div>
          <div className="github">
            <a href={profileData.html_url} target="_blank" rel="noreferrer">
              <p>GITHUB</p>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </NameContainer>
        <BioContainer>{profileData.bio}</BioContainer>
        <InfoTagsList>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileData.login}</span>
          </li>
          {profileData?.company && (
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profileData?.company}</span>
            </li>
          )}
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profileData.followers} seguidores</span>
          </li>
        </InfoTagsList>
      </ProfileContentContainer>
    </ProfileCardContainer>
  );
}
