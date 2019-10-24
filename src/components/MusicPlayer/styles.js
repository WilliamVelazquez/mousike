import styled from 'styled-components';

export const AudioPlayer = styled.div`
    background-color: #262930;  
    display: grid;
    grid-template-columns:100px 1fr 100px ;
    justify-content: space-evenly;//alineado horizontal
    align-content: space-around;//alineado vertical
    justify-items: center ;//horizontal
    /* // align-items:  ; *///vertical
    grid-gap: 50px;
    padding: 20px;
`;
export const PlayingArtist = styled.div`
    font-size: 12px;
`;

AudioPlayer.PlayingArtist = PlayingArtist;

//Old

export const CoverImg = styled.img`
        max-width: 50px;
        max-height: 50px;
`;

export const Song = styled.li`
    height: 40px;
    display: grid;
    cursor: pointer;
    list-style: none;
    text-decoration: white;
    border-bottom: 1px solid #D8D8D8;
    grid-template-columns: 1fr 40px;
    &:hover{
        background: #5D00F5;
    }
`;

export const SongLink = styled.a`
    width: 100%;
    color: white;
    display: grid;
    padding: 10px 0;
    padding-left: 10px;
    text-decoration: none;
    grid-template-columns: 1fr 80px;
`;

export const SongName = styled.div`
    white-space: nowrap;
`;

export const SongDuration = styled.div`
    justify-self: flex-end;
`;

export const SongAddImage = styled.img`
    width: 15px;
    height: 15px;
    align-self: center;
    justify-self: center;
`;
