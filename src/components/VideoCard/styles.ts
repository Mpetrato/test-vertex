import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    background-color: #181818;
    width: 100%;
    display: flex;
    justify-content: flex-start;
`

export const ChannelCard = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px;
    font-size: 18px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;

`

export const ImgChannel = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 40px;
`

export const TitleWrapper = styled.div`
    
    & > button {
        border-radius: 2px;
        color: #FFFFFF;
        white-space: nowrap;
        font-size: 14px;
        background-color: #c00;
        padding: 10px 16px;
        border: none;
        font-weight: bold;
    }

    @media (min-width: 768px) {
        & > button {
            margin-left: 100px;
        }
    }
`

export const VideoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 20px;
    cursor: pointer;


    & > img {
        width: 280px;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        padding: 0 40px;
        align-items: center;
        max-width: 800px;
    }
`

export const VideoContent = styled.div`
    margin-left: 16px;
    margin-top: 20px;
    & > h2 {
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 400;
    }
    & > span {
        display: block;
        font-size: 12px;
        color: #aaaaaa;
        font-weight: 400;
        margin-top: 20px;
    }
`

export const LinkWrapper = styled.div`

    padding: 10px;
    background-color: rgba(0, 0, 0, 1);
    display: inline-block;
    margin-top: 20px;
    border-radius: 10px;

    & > a {
        text-decoration: none;
        color: white;
    }
`