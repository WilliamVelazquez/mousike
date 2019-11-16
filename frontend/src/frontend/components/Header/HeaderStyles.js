
import styled from 'styled-components';

// .isLogin, .isRegister `
//     background-color: #21c08b;
// `
const HeaderWrapper = styled.header`;
    align-items: center;
    background: #8f57fd;
    color: white;
    display: flex;
    height: 100px;
    justify-content: space-between;
    top: 0px;
    width: 100%;
`;

const HeaderImg = styled.img`
    margin-left: 30px;
    width: 200px;
`;

const HeaderMenu = styled.div`
      margin-right: 30px;
      & > ul {
        display: none;
        list-style: none;
        margin: 0px 0px 0px -14px;
        padding: 0px;
        position: absolute;
        width: 100px;
        text-align: right;
      }
      :hover > ul{
        display: block;
      }
      & > li {
        margin: 10px 0px;
        & > a {
            color: white;
            text-decoration: none;
            :hover{
                text-decoration: underline;
            }
        }
      }
  `;

const HeaderProfile = styled.div`
    align-items: center;
    display: flex;
    cursor: pointer;
    & > img {
        margin-right: 8px;
        width: 40px;
        border-radius: 100%;
        object-fit: cover;
    }
`;

