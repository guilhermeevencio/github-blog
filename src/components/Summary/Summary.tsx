import { useEffect, useState } from 'react'
import { getProfileInfo, ProfileInfoData } from '../../utils/requests'
import {
  SummaryContainer,
  ImageContainer,
  NameContainer,
  BioContent,
  LinksContainer,
  InfoContainer,
  LinkContent,
} from './style'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'

export function Summary() {
  const [profileInfo, setProfileInfo] = useState({} as ProfileInfoData)

  useEffect(() => {
    async function apiProfileResponse() {
      const data = await getProfileInfo()
      setProfileInfo(data)
    }

    apiProfileResponse()
  }, [])

  return (
    <SummaryContainer>
      <ImageContainer>
        <img src={profileInfo.avatarUrl} alt="profile image" />
      </ImageContainer>
      <InfoContainer>
        <NameContainer>
          <h1>{profileInfo.name}</h1>
          <LinkContent variant="blue">
            <a href={profileInfo.htmlUrl} style={{ fontWeight: '700' }}>
              GITHUB
              <FaExternalLinkAlt color="#3294F8" />
            </a>
          </LinkContent>
        </NameContainer>
        <BioContent>{profileInfo.bio}</BioContent>
        <LinksContainer>
          <LinkContent>
            <a href={profileInfo.htmlUrl}>
              <FaGithub color="#3A536B" />
              {profileInfo.login}
            </a>
          </LinkContent>
          <LinkContent>
            <span>
              <FaBuilding color="#3A536B" />
              <p>{profileInfo.company || 'Freelancer'}</p>
            </span>
          </LinkContent>
          <LinkContent>
            <span>
              <FaUserFriends color="#3A536B" />
              <p>{`${profileInfo.followers} seguidores`}</p>
            </span>
          </LinkContent>
        </LinksContainer>
      </InfoContainer>
    </SummaryContainer>
  )
}
