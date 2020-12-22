import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonClick {
  hasClick: boolean;
}

export const Header = styled.header<ButtonClick>`
  background-color: black;
  display: flex;

  width: 100%;
  height: 20vh;

  padding: 2% 5%;
  border: 0;

  justify-content: space-around;
  align-items: center;

  img {
    height: 100%;
    width: 20%;
    max-height: 80px;
    max-width: 130px;
    @media (max-width: 560px) {
      & {
        height: 40%;
        width: 15%;
      }
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 20%;
    .nav {
      opacity: 0;
      visibility: hidden;
      display: none;
      .menu {
        display: block;
      }
      .close {
        display: none;
      }
      ${(props) =>
        props.hasClick &&
        css`
          .menu {
            display: none;
          }
          .close {
            display: block;
          }
        `}
    }
    button {
      flex: 1;
      background: transparent;
      min-width: 24px;
      min-height: 45px;
      color: white;
      border: 0;
      display: flex;

      justify-content: center;
      align-items: center;
      font-size: 15px;
      span {
        margin: 0 10%;
      }

      svg {
        width: 25px;
        height: 25px;
      }

      &:hover {
        transform: translateX(2px) translateY(-2px);
      }
    }
    @media (max-width: 560px) {
      & {
        .user {
          display: none;
        }
        .nav {
          display: inline;
          opacity: initial;
          visibility: visible;
        }
      }
    }
    @media (max-width: 850px) {
      & {
        font-size: 10px;
        width: 25%;
        span {
          margin: 0;
        }
      }
    }
  }
  @media (max-width: 850px) {
    & {
      height: 20vh;
      padding: 1% 1%;
    }
  }
  @media (max-width: 560px) {
    & {
      .mobile {
        display: block;
        position: absolute;
        z-index: 10;
        background-color: #fff;
        width: 100%;
        height: 50%;
        margin-top: 20vh;
      }
    }
  }
`;

export const Form = styled.form`
  background-color: white;
  display: flex;

  width: 50vw;
  min-width: 220px;
  height: 7vh;

  border: 2px solid black;
  border-radius: 10px;
  transition: border-color 0.4s;

  &:hover {
    border-color: #3b92cc;
    transform: translateX(2px) translateY(-2px);
  }

  input {
    flex: 1;

    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    border-right: 1.5px solid black;
    background: transparent;

    padding: 0 2%;

    &::placeholder {
      font-size: 20px;
    }
  }

  button {
    border: 0;
    background: transparent;
    padding: 0 1%;
  }
  @media (max-width: 850px) {
    & {
      flex: 1;
      height: 10vh;
      width: 40%;
      margin-left: 2%;
    }
  }
  @media (max-width: 560px) {
    & {
      height: 6.5vh;
    }
  }
  @media (max-height: 1100px) and (min-height: 900px) {
    height: 5vh;
  }
  @media (max-height: 1500px) and (min-height: 1200px) {
    height: 4vh;
  }
`;

export const Navigation = styled.nav<ButtonClick>`
  background-color: #3b92cc;
  padding-right: 10%;
  margin: 0;
  display: flex;

  justify-content: space-around;
  align-items: center;
  .mobile {
    display: none;
  }
  a {
    text-decoration: none;
    color: #050504;
    padding: 2%;

    &:hover {
      transform: translateX(2px) translateY(-2px);
    }
  }
  @media (max-width: 560px) {
    & {
      display: none;
      ${(props) =>
        props.hasClick &&
        css`
          display: flex;
        `}
      background-color: #fff;
      z-index: 10;
      flex-direction: column;
      align-items: initial;
      padding-left: 2%;
      position: absolute;
      width: 100%;

      .mobile {
        display: block;
        .head {
          display: flex;
          flex-direction: row;
          margin-top: 2%;
        }
        .text {
          display: flex;
          flex-direction: column;
          margin-left: 2%;
        }
        .buttons {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 10%;
          height: 10vh;

          button {
            width: 45%;
            height: 7vh;
            border: 0;
            border-radius: 5%;

            background-color: #3b92cc;

            a {
              color: #fff;
            }
          }
        }
      }
    }
  }
  @media (max-width: 850px) {
    padding-left: 3%;
  }
`;

export const Divulgation = styled.div`
  max-width: 100%;
  max-height: 50vh;

  overflow: hidden;
  figure {
    position: relative;
    width: 300%;
    margin: 0;
    left: 0;
    animation: 9s slider infinite;
    img {
      width: 33.333333%;
      height: 50vh;
      float: left;
      @media (max-width: 560px) {
        height: 25vh;
      }
    }
    @keyframes slider {
      0% {
        left: 0;
      }
      33% {
        left: 0;
      }
      66% {
        left: -100%;
      }
      100% {
        left: -200%;
      }
    }
  }
  @media (max-height: 1400px) and (min-height: 1000px) {
    height: 30vh;
  }
`;

export const Content = styled.main`
  display: flex;
  padding: 2%;

  width: 100%;

  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 560px) {
    & {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Product = styled.a`
  background-color: white;
  display: flex;
  margin-bottom: 2%;
  margin-right: 2%;
  padding: 2%;
  border-radius: 10px;

  width: 30%;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: transform 0.4s;
  transition: box-shadow 0.4s;

  &:hover {
    transform: translateX(10px) translateY(-10px);
    box-shadow: -2px 2px 2px 2px ${shade(0.4, '#f4ede8')};
    cursor: pointer;
  }

  img {
    height: 75%;
  }

  div {
    height: 25%;
  }

  @media (max-width: 850px) {
    & {
      width: 45%;
      height: 90%;
    }
  }
  @media (max-width: 560px) {
    & {
      width: 90%;
    }
  }
`;

export const Partnerships = styled.section`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    margin: 2% 0;
    width: 80%;

    justify-content: space-around;

    img {
      border-radius: 50%;

      transition: transform 0.4s;
      transition: box-shadow 0.4s;
      &:hover {
        transform: translateX(10px) translateY(-10px);
        box-shadow: -2px 2px 2px 2px ${shade(0.4, '#f4ede8')};
        cursor: pointer;
      }
    }
    @media (max-width: 560px) {
      & {
        overflow: scroll;
        width: 100%;
        padding: 2% 0;
        justify-content: initial;
      }
    }
  }
`;

export const Footer = styled.footer`
  display: flex;
  background-color: white;

  justify-content: center;
  align-items: center;
  height: 10vh;
`;
