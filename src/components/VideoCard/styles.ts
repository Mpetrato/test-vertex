import styled from "styled-components";

export const Container = styled.div`
    margin-top: 40px;
    background-color: #181818;
`

export const ChannelCard = styled.div`
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding: 16px;
    font-size: 18px;
    color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 200px;

    & > button {
        border-radius: 2px;
        color: #FFFFFF;
        white-space: nowrap;
        font-size: 14px;
        background-color: #c00;
        padding: 10px 16px;
        border: none;
        font-weight: bold;
        margin-left: auto;
        margin-right: 200px;
    }
`

export const ImgChannel = styled.img`
    width: 136px;
    height: 136px;
    border-radius: 50%;
    margin-right: 40px;
`

export const VideoCard = styled.div`
    display: flex;
    padding: 0 40px;
    cursor: pointer;
`

export const VideoContent = styled.div`
    margin-left: 16px;
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