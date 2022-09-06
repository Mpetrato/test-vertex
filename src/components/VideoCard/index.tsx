import { Item } from '../../types'
import * as C from './styles'

type TVideoCard = {
    item: Item
}

export const VideoCard = ({ item }: TVideoCard) => {


    return (
        <C.Container>
            {item.id.kind === 'youtube#channel' && (
                <C.ChannelCard>
                    <C.ImgChannel src={item.snippet.thumbnails.medium.url} alt="" />
                    {item.snippet.title}
                    <button>INSCREVER-SE</button>
                </C.ChannelCard>
            )}
            {item.id.kind === 'youtube#video' && (
                <C.VideoCard>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <C.VideoContent>
                        <h2>{item.snippet.title}</h2>
                        <span>{item.snippet.description}</span>
                    </C.VideoContent>
                </C.VideoCard>
            )} 
        </C.Container>
    )
}