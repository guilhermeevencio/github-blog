/* eslint-disable camelcase */
import axios from 'axios'

export interface ProfileInfoData {
  name: string
  bio: string
  htmlUrl: string
  login: string
  company: string | null
  followers: string
  avatarUrl: string
}

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
  baseURL: 'http://localhost:3333',
})
