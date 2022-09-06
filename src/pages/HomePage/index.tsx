import { useState, FormEvent } from 'react'

import { VideoCard } from '../../components/VideoCard';
import { ISearchResult, Item } from '../../types';
import { ApiServices } from '../../services/api';
import * as C from './styles'



export const HomePage = () => {
    const [data, setData] = useState<ISearchResult>({} as ISearchResult);
    const [items, setItems] = useState<Item[]>([]);
    const [termoDePesquisa, setTermoDePesquisa] = useState('');
    const [haveResults, setHaveResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1)

    
    const handleSearchVideo = async (e: FormEvent) => {
        e.preventDefault();
        setItems([])
        setIsLoading(true)
        setHaveResults(true)
        const response = await ApiServices.searchVideo(termoDePesquisa)

        setItems(response.items)
        setData(response)
        setIsLoading(false)
    }

    const handleNextPage = async () => {
        setIsLoading(true)
        setHaveResults(true)

        const response = await ApiServices.nextPage(data.nextPageToken, termoDePesquisa)
        
        setItems(response.items)
        setData(response)
        setIsLoading(false)
        setPage(page + 1)
    }

    const handlePreviousPage = async () => {
        setIsLoading(true)
        setHaveResults(true)

        const response = await ApiServices.nextPage(data.prevPageToken!, termoDePesquisa)
    
        setItems(response.items)
        setData(response)
        setIsLoading(false)
        setPage(page - 1)
    }
    
    return (
        <C.Container haveResults={haveResults}>
            
            <C.FormSearch >
                <C.InputSearch 
                    placeholder='Pesquisar' 
                    value={termoDePesquisa}
                    onChange={e => setTermoDePesquisa(e.target.value)}
                />
                <C.ButtonSearch onClick={(e) => handleSearchVideo(e)}>
                    Buscar
                </C.ButtonSearch>
            </C.FormSearch>


            <C.SearchResults  haveResults={haveResults}>
                <C.FlexContainer>
                    {isLoading && (
                        <C.ErroText>Carregando Videos..</C.ErroText>
                    )}
                    {!isLoading && (
                        items.map((item, index) => (
                            <VideoCard key={index} item={item} />
                        ))
                    )}
                    {haveResults && (
                        <C.PaginationWrapper>
                            <button onClick={handlePreviousPage}>&lt;</button>
                            <div>{page}</div>
                            <button onClick={handleNextPage}>&gt;</button>
                        </C.PaginationWrapper>
                    )}
                </C.FlexContainer>
            </C.SearchResults>

        </C.Container>
    );
};