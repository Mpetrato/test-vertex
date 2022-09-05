import { useState, FormEvent } from 'react'
import { VideoCard } from '../../components/VideoCard';
import { ApiServices } from '../../services/api';

import { Item } from '../../types';
import * as C from './styles'



export const HomePage = () => {
    const [data, setData] = useState<Item[]>([]);
    const [termoDePesquisa, setTermoDePesquisa] = useState('');
    const [haveResults, setHaveResults] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSearchVideo = async (e: FormEvent) => {
        e.preventDefault();
        setData([])
        setIsLoading(true)
        setHaveResults(true)
        const response = await ApiServices.searchVideo(termoDePesquisa)

        setData(response.items)
        setIsLoading(false)
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
                {isLoading && (
                    <div>Carregando Dados</div>
                )}
                {data.map((item) => (
                    <VideoCard item={item} />
                ))}
            </C.SearchResults>
        </C.Container>
    );
};