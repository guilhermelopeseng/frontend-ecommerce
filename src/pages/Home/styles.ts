import styled from 'styled-components';

export const Header = styled.header`
  background-color: #ffffff;
  display: flex; // torna o bloco flexivel
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row; // os itens dentro do header vao seguin na horizontal
  justify-content: center; // eles vao ficar no centro na horizontal
  align-items: center; // eles vão ficar no centro na vertical

  img {
    margin: 10px 40px;
    width: 80px;
    height: 40px;
  }

  button {
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    background: transparent;
    border: none;
    align-items: center;
    span {
      margin-left: 6%;
      font-size: 16px;
    }
  }
`;
export const Form = styled.form`
  display: flex; //torna o bloco flexivel
  flex: 1; // vai ocupar todo o header
  max-width: 700px;
  background: #ffffff;
  border: 1.5px solid #d1d1d1;
  justify-content: space-between; // vai organizar os intems com um espaço entro eles
  input {
    width: 95%; // vai ocupar 70% do tamanho do form
    max-width: 900px; // vai ocupar no maximo 900 px
    height: 40px;
    border: none;
    padding-left: 7px;
    font-size: 20px;
  }

  button {
    min-width: 20px;
    background: transparent;
    border: none;
    padding-right: 7px;
  }
`;

export const Navigation = styled.nav`
  background-color: #d1d1d1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 7%;
  padding-right: 30%;
  margin-left: 8%;
  margin-right: 8%;

  a {
    text-decoration: none;
    color: #050504;
    &:hover {
      color: #ffffff;
    }
  }
`;
