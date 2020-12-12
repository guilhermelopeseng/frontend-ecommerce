import styled from 'styled-components';

export const Header = styled.header`
  background-color: #d1d1d1;
  display: flex; // torna o bloco flexivel
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row; // os itens dentro do header vao seguin na horizontal
  justify-content: center; // eles vao ficar no centro na horizontal
  align-items: center; // eles vão ficar no centro na vertical

  img {
    margin: 10px 40px;
  }
`;
export const Form = styled.form`
  display: flex; //torna o bloco flexivel
  flex: 1; // vai ocupar todo o header
  max-width: 700px;
  background: #ffffff;
  justify-content: space-between; // vai organizar os intems com um espaço entro eles
  input {
    width: 95%; // vai ocupar 70% do tamanho do form
    max-width: 900px; // vai ocupar no maximo 900 px
    height: 30px;
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
