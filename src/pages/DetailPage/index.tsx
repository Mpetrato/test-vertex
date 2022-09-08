import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { ApiServices } from '../../services/api'
import { TDetails } from '../../types/DetailsTypes'
import * as C from './styles'

export const DetailPage = () => {
    const params = useParams()
    const { id } = params

    const [isLoading, setIsLoading] = useState(true);

    const [itemDetails, setItemDetails] = useState<TDetails>({} as TDetails);

    useEffect(() => {
        ApiServices.getVideoDetails(id!)
        .then(response => {
            setItemDetails(response)
            console.log(response)
            setIsLoading(false)
        })
    }, [])

    

    return (
        <>
            {!isLoading && (
                <C.Container>
                    <C.ImgWrapper>
                        <iframe 
                            src={`https://www.youtube.com/embed/${itemDetails.items[0].id}`}
                        >
                        </iframe>
                    </C.ImgWrapper>
                    <C.ContentWrapper>
                        <C.TopText>
                            <h4>Descrição</h4>
                        </C.TopText>
                        <C.VideoTitle>
                            {itemDetails.items[0].snippet.title}
                        </C.VideoTitle>
                        <C.DetailsContainer>
                            <C.DetailsWrapper>
                                <h4>{itemDetails.items[0].statistics.likeCount}</h4>
                                <span>Marcações "Gostei"</span>
                            </C.DetailsWrapper>
                            <C.DetailsWrapper>
                                <h4>{itemDetails.items[0].statistics.viewCount}</h4>
                                <span>Visualizações</span>
                            </C.DetailsWrapper>
                            <C.DetailsWrapper>
                                <h4>{itemDetails.items[0].statistics.commentCount}</h4>
                                <span>Comentarios</span>
                            </C.DetailsWrapper>
                        </C.DetailsContainer>
                        <C.DescriptionWrapper>
                            <p>{itemDetails.items[0].snippet.description}</p>
                        </C.DescriptionWrapper>
                    </C.ContentWrapper>
                </C.Container>
            )}
            {isLoading && (
                <C.Container>
                    <div>Carregando detalhes...</div>
                </C.Container>
            )}
        </>
    )
}