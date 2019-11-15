import styled from 'styled-components';

export const RegisterSection = styled.section`
  background-color: white;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  min-height: calc(100vh - 200px); /* El ancho será igual al tamaño de todo el height menos 200px (100px del header + 100px del footer) */
  `;
export const RegisterContainer = styled.section`
  border: 2px solid white;
  border-radius: 40px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  color: #616467;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 60px 68px 40px;
  /* & > label{
    font-size: 14px;
  } */
`;
export const RegisterRememberMe = styled.div`
  color: #616467;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  & > a {
    color: #616467;
    font-size: 14px;
    text-decoration: none;
  }
  & > a:hover{
    text-decoration: underline;
  }
`;
export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  `;
export const RegisterSocialMedia = styled.section`
  align-items: center;
  display: flex;
  font-size: 14px;
  margin-bottom: 10px;
  & > div > img{
    margin-right: 10px;
    width: 30px;
  }
`;
export const LoginSection = styled.p`
  font-size: 14px;
  & > a {
    color: #616467;
    font-weight: bold;
    font-size: 16px;
    text-decoration: none;      
  }
  & > a:hover {
    text-decoration: underline;
  }
`;
export const InputContainer = styled.p`
    margin: 0 0 30px 0;
    position: relative;
`;
export const RegisterInputLabel = styled.label`
 
    position: absolute;
    left: 8px;
    top: 12px;
    color: #999;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    font-weight: 400;
    background-color: rgba(255,255,255,0);
    @include transition(color .3s, top .3s, background-color .8s);

      top: -11px;
      background-color: rgba(255,255,255,0.8);
      font-size: 14px;
    
`;
export const RegisterInput = styled.input`
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    margin:0;
    background: #fff;
    border: 1px solid #dbdbdb;
    font-size: 16px;
    padding: 12px 8px;
    border-radius: 2px;
    & :focus{
        background: #fff

    }
`;
export const RegisterButton = styled.button`
    background-color:white;
    border-radius:500px;
    border: 1px #ccc solid;
    box-shadow:#616467 0px 0px 0px 2px inset;
    box-sizing:border-box;
    color:#616467;
    cursor:pointer;
    display:block;
    font-size:14px;
    font-weight:700;
    height:48px;
    letter-spacing:2px;
    line-height:14px;
    margin-bottom:0px;
    min-width:160px;
    padding-bottom:18px;
    padding-left:48px;
    padding-right:48px;
    padding-top:16px;
    text-align:center;
    text-transform:uppercase;
    user-select:none;
    width:450px;
    :hover{
        color: #fff;
        background-color: #616467;
    }
`;

