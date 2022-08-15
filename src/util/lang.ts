import config from '../config/config.js'
import type * as Schemas from '../types/database.js'
import type { languageSelect } from '../types/lang.js'

export const selectLang: languageSelect = JSON.parse(localStorage.getItem("lang") || "{}")

const endpoint = (contex: string) => {
  let url: string
  if(selectLang.userPreferences !== null){
    url = config.apiBase + `/lang/${contex}/${selectLang.userPreferences}`
  } else {
    url = config.apiBase + `/lang/${contex}/${selectLang.default}`
  }
  return url
}

const request = async (url: string) => {
    const req = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return req
}

export const getLang = (async (contex: string) => {
  const url = endpoint(contex)
  const req: any = await request(url)
  switch(contex){
    case 'home': {
      const data: Schemas.home = await req.json()
      return data.data
    }
    case 'metadata': {
      const data: Schemas.metadata = await req.json()
      return data.data
    }
    case 'opengraph': {
      const data: Schemas.opengraph = await req.json()
      return data.data
    }
    case 'documentation': {
      const data: Schemas.documentation = await req.json()
      return data.data
    }
  }
})