import { createContext, ReactNode, useEffect, useState } from 'react'
import { getPosts, getProfileInfo } from '../utils/requests'

export interface PostData {
  title: string
  body: string
  comments: number
  commentsUrl: string
  createdAt: string
  htmlUrl: string
  id: number
}

export interface ProfileInfoData {
  name: string
  bio: string
  htmlUrl: string
  login: string
  company: string | null
  followers: string
  avatarUrl: string
}

interface IAppContext {
  profileInfo: ProfileInfoData
  postData: PostData[]
}

export const AppContext = createContext({} as IAppContext)

interface AppProviderProps {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  const [profileInfo, setProfileInfo] = useState({} as ProfileInfoData)
  const [postData, setPostData] = useState([] as PostData[])

  useEffect(() => {
    async function apiProfileResponse() {
      const profileData = await getProfileInfo()
      const posts = await getPosts()
      setProfileInfo(profileData)
      setPostData(posts)
    }

    apiProfileResponse()
  }, [])

  return (
    <AppContext.Provider value={{ profileInfo, postData }}>
      {children}
    </AppContext.Provider>
  )
}
