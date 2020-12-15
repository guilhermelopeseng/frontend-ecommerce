import styled from 'styled-components';
import { shade } from 'polished';

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
  background-color: #3b92cc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 7%;
  padding-right: 30%;
  margin-left: 0%;
  margin-right: 0%;

  a {
    text-decoration: none;
    color: #050504;
    &:hover {
      color: #ffffff;
    }
  }
`;

export const Divulgation = styled.section`
  margin-top: 10px;
  display: flex;
  height: 50%;
  width: 100%;
  justify-content: center;
  img {
    flex: 1;
    width: 95%;
    height: 50vh;
    max-width: 1450px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 5%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Product = styled.div`
  width: 30%;
  background-color: #ffffff;
  text-align: center;
  margin-top: 5%;
  padding: 2% 2%;

  border-radius: 4%;

  transition: box-shadow 1s;

  &:hover {
    box-shadow: 2px 2px 2px 2px ${shade(0.2, '#f4ede8')};
  }
  img {
    background: transparent;
    text-align: center;
  }
  h1 {
    text-align: left;
    margin: 5% 0;
  }
  h2 {
    text-align: left;
  }
  p {
    text-align: left;
  }

  div {
    &:hover {
      color: #3b92cc;
      cursor: pointer;
    }
  }
`;

export const Partnerships = styled.section`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 30px;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10%;
  }

  img {
    margin: 5% 0;
    border-radius: 50%;
  }
`;

export const Footer = styled.footer`
  background-color: #ffffff;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
