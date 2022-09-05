import axios from 'axios'

export const ApiServices = {

    searchVideo: async (termoDePesquisa: string) => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${termoDePesquisa}&key=${process.env.API_KEY}`)
        
        return response.data
    },
}