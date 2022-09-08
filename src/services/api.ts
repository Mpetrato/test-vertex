import axios from 'axios'
import { Environment } from '../environment'
import { TDetails } from '../types/DetailsTypes'
import { ISearchResult } from '../types/VideoTypes'

export const ApiServices = {

    searchVideo: async (termoDePesquisa: string) => {
        const response = await axios.get<ISearchResult>(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termoDePesquisa}&key=${Environment.API_KEY}&maxResults=10`)
        
        return response.data
    },
    nextPage: async (token: string, termoDePesquisa: string) => {
        const response = await axios.get<ISearchResult>(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termoDePesquisa}&key=${Environment.API_KEY}&maxResults=10&pageToken=${token}`)
        
        return response.data
    },
    getVideoDetails: async (videoId: string) => {
        const response = await axios.get<TDetails>(` https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${Environment.API_KEY}`)
    
        return response.data
    }
}