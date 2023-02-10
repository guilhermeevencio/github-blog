/* eslint-disable camelcase */
import axios from 'axios'
import { PostData, ProfileInfoData } from '../contexts/AppContext'

export async function getProfileInfo() {
  const { data } = await axios.get(
    'https://api.github.com/users/guilhermeevencio',
  )
  const { name, bio, html_url, login, company, followers, avatar_url } = data
  const profileInfo: ProfileInfoData = {
    name,
    bio,
    htmlUrl: html_url,
    login,
    company,
    followers,
    avatarUrl: avatar_url,
  }
  return profileInfo
}

export const api = axios.create({
  baseURL: 'https://api.github.com',
})

export async function getPosts() {
  const { data } = await api.get('/search/issues', {
    params: {
      q: 'repo:rocketseat-education/reactjs-github-blog-challenge',
    },
  })

  const postDataList: PostData[] = data.items.map(
    ({
      body,
      title,
      comments,
      comments_url,
      created_at,
      html_url,
      id,
      number,
    }: any) => {
      const postData: PostData = {
        body,
        title,
        comments,
        commentsUrl: comments_url,
        createdAt: created_at,
        htmlUrl: html_url,
        id,
        number,
      }
      return postData
    },
  )
  return postDataList
}
