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

export const SearchResults = styled.div<TSearchResults>`
    display: ${props => props.haveResults ? 'block' : 'none'};
    margin-top: 100px;
    background-color: #181818;
    width: 80%;
    padding-bottom: 100px;
`