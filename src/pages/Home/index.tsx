import React from 'react';
import { Link } from 'react-router-dom';

import { BiSearchAlt2 } from 'react-icons/bi';
import { TiShoppingCart } from 'react-icons/ti';
import { BsPeopleCircle } from 'react-icons/bs';
import {
  Header,
  Form,
  Navigation,
  Divulgation,
  Content,
  Product,
  Partnerships,
  Footer,
} from './styles';

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
      <Divulgation>
        <img
          src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1607665355698-home-sliderdesktop.jpg"
          alt="Propaganda"
        />
      </Divulgation>
      <Content>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
        <Product>
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_976658-MLA41813920842_052020-V.webp"
            alt="produto"
          />
          <div>
            <h1>Ximomi Redmi Note 9s 128/gb Azul</h1>
            <h2>R$ 1.999</h2>
            <p>em 12x R$ 166,58 sem juros</p>
          </div>
        </Product>
      </Content>
      <Partnerships>
        <h1>Lojas Parceiras</h1>
        <div>
          <img
            src="https://http2.mlstatic.com/D_Q_NP_980431-MLA44194016476_112020-G.webp"
            alt="Loja parceira"
          />
          <img
            src="https://http2.mlstatic.com/D_Q_NP_980431-MLA44194016476_112020-G.webp"
            alt="Loja parceira"
          />
          <img
            src="https://http2.mlstatic.com/D_Q_NP_980431-MLA44194016476_112020-G.webp"
            alt="Loja parceira"
          />
          <img
            src="https://http2.mlstatic.com/D_Q_NP_980431-MLA44194016476_112020-G.webp"
            alt="Loja parceira"
          />
          <img
            src="https://http2.mlstatic.com/D_Q_NP_980431-MLA44194016476_112020-G.webp"
            alt="Loja parceira"
          />
        </div>
      </Partnerships>
      <Footer>
        <p> © Produzido por Guilherme Lopes</p>
      </Footer>
    </>
  );
};

export default Home;
