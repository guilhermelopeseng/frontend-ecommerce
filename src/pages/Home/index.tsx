import React from 'react';
import { Link } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';
import { TiShoppingCart } from 'react-icons/ti';
import { BsPeopleCircle } from 'react-icons/bs';
import { Header, Form, Navigation } from './styles';

import logoTest from '../../assets/logoTest.jpg';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logoTest} alt="Logo da Loja" />
        <Form>
          <input placeholder="Buscar produtos, marcas, lojas e muito mais..." />
          <button type="submit">
            <BiSearchAlt2 size={25} />
          </button>
        </Form>
        <button type="button">
          <TiShoppingCart size={25} color="#3B92CC" />
        </button>
        <button type="button">
          <BsPeopleCircle size={25} color="#3B92CC" />
          <span>Login</span>
        </button>
      </Header>
      <Navigation>
        <Link to="/">HOME</Link>
        <Link to="/">CATEGORIAS</Link>
        <Link to="/">PROMOÇÕES</Link>
        <Link to="/">MASCULINO</Link>
        <Link to="/">FEMININO</Link>
        <Link to="/">SOBRE</Link>
      </Navigation>
    </>
  );
};

export default Home;
