import styled from 'styled-components';

export const Song = styled.li`
    list-style: none;
`;

export const SongLink = styled.a`
    display: grid;
    grid-template-columns: 1fr 80px 40px;
    color: white;
    text-decoration: white;
    border-bottom: 1px solid #D8D8D8;
    width: 100%;
    height: 40px;
    padding: 10px 0;
    &:hover{
        background:#5D00F5;
    }
`;

export const SongName = styled.div``;
export const SongDuration = styled.div``;
export const SongAddImage = styled.img`
    width: 15px;
    height: 15px;
`;
