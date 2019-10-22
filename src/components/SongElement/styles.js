import styled from 'styled-components';

export const Song = styled.li`
    list-style: none;
`;

export const SongLink = styled.a`
    width: 100%;
    color: white;
    height: 40px;
    display: grid;
    padding: 10px 0;
    padding-left: 10px;
    text-decoration: white;
    border-bottom: 1px solid #D8D8D8;
    grid-template-columns: 1fr 80px 40px;
    &:hover{
        background: #5D00F5;
    }
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
