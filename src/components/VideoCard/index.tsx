import { Link } from 'react-router-dom'

import * as C from './styles'
import { Item } from '../../types/VideoTypes'

type TVideoCard = {
    item: Item
}

export const VideoCard = ({ item }: TVideoCard) => {


    return (
        <C.Container>
            {item.id.kind === 'youtube#channel' && (
                <C.ChannelCard>
                    <C.ImgChannel src={item.snippet.thumbnails.medium.url} alt="" />
                    <C.TitleWrapper>
                        {item.snippet.title}
                        <button>INSCREVER-SE</button>
                    </C.TitleWrapper>
                </C.ChannelCard>
            )}
            {item.id.kind === 'youtube#video' && (
                <C.VideoCard>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <C.VideoContent>
                        <h2>{item.snippet.title}</h2>
                        <span>{item.snippet.description}</span>
                        <C.LinkWrapper>
                            <Link to={`detalhes/${item.id.videoId}`}>
                                Detalhes
                            </Link>
                        </C.LinkWrapper>
                    </C.VideoContent>
                </C.VideoCard>
            )} 
        </C.Container>
    )
}