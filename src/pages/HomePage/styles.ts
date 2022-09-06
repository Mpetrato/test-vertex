import styled, { keyframes } from "styled-components";

type TContainer = {
    haveResults: boolean
}
type TSearchResults = TContainer

export const Container = styled.div<TContainer>`
    background-color: #212121;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: ${props => props.haveResults ? 'top' : 'center'};
    animation-name: ${props => props.haveResults ? ContainerAnimation : ''};
    animation-duration: 1s;
    padding: ${props => props.haveResults ? '100' : '400'}px 0px;
    flex-direction: column;
`

const ContainerAnimation = keyframes`
    0% { padding: 400px 0px }
    100% { padding: 100px 0px  }
`

export const FlexContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const FormSearch = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const InputSearch = styled.input`
    background-color: #121212;
    width: 80%;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    color: #ffffff;
    outline: none;
`

export const ButtonSearch = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.5);
    background-color: #121212;
    border: none;
    cursor: pointer;
    margin-top: 20px;
    transition: all .3s linear;

    &:hover {
        color: rgba(255, 255, 255, 1);
    }
`

export const ErroText = styled.h2`
    color: white;
    padding: 20px;
`

export const SearchResults = styled.div<TSearchResults>`
    display: ${props => props.haveResults ? 'block' : 'none'};
    margin-top: 100px;
    background-color: #181818;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const PaginationWrapper = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-size: 25px;
    margin-top: 40px;
    margin: 0 auto;
    
    padding-bottom: 50px;

    & > button {
        padding: 15px;
        clip-path: circle();
        font-size: 40px;
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        cursor: pointer;
        margin: 0 20px;
    }
`