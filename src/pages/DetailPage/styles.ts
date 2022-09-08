import styled from "styled-components";

export const Container = styled.div`
    background-color: #212121;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
`
export const ImgWrapper = styled.div`

    height: 220px;

    & > iframe { 
        width: 100%;
        height: 100%;
    }

    @media (min-width: 768px) {
        height: 500px;
    }

    @media (min-width: 1200px) { 
        height: 800px;
    }
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const TopText = styled.div`
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    & > h4 {
        color: white;
        font-size: 20px;
        font-weight: 500;
    }
`
export const VideoTitle = styled.span`
    padding: 20px;
    font-size: 18px;
    color: white;
    font-weight: 500;
`

export const DetailsContainer = styled.div`
    padding: 20px;   
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`

export const DetailsWrapper = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & > span {
        color: rgba(255, 255, 255, 0.4);
        font-size: 12px;
    }
`
export const DescriptionWrapper = styled.div`
    color: white;
    padding: 20px;
`