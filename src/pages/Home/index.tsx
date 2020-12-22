import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BiSearchAlt2, BiMenu } from 'react-icons/bi';
import { TiShoppingCart } from 'react-icons/ti';
import { BsPeopleCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
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
  const [menuClick, setmenuClick] = useState(false);
  return (
    <>
      <Header hasClick={!!menuClick}>
        <img src={logoTest} alt="Logo da Loja" />
        <Form>
          <input placeholder="Buscar produtos, marcas, lojas e muito mais..." />
          <button type="submit">
            <BiSearchAlt2 size={25} color="#3B92CC" />
          </button>
        </Form>
        <div className="interations">
          <button type="button" className="cart">
            <TiShoppingCart size={25} color="#3B92CC" />
          </button>
          <button type="button" className="user">
            <BsPeopleCircle size={25} color="#3B92CC" />
            <span>Login</span>
          </button>
          <button
            type="button"
            className="nav"
            onClick={() => {
              setmenuClick(!menuClick);
            }}
          >
            <BiMenu size={25} color="#3B92CC" className="menu" />
            <AiOutlineClose size={25} color="#3B92CC" className="close" />
          </button>
        </div>
      </Header>
      <Navigation className="navigation" hasClick={!!menuClick}>
        <div className="mobile">
          <div className="head">
            <BsPeopleCircle size={50} color="#3B92CC" />
            <div className="text">
              <h1>Bem-vindo</h1>
              <p>Entre na sua conta para ver suas compras, favoritos, etc</p>
            </div>
          </div>
          <div className="buttons">
            <button type="button">
              <Link to="/">Entre</Link>
            </button>
            <button type="button">
              <Link to="/">Crie sua conta</Link>
            </button>
          </div>
        </div>
        <Link to="/">HOME</Link>
        <Link to="/">CATEGORIAS</Link>
        <Link to="/">PROMOÇÕES</Link>
        <Link to="/">MASCULINO</Link>
        <Link to="/">FEMININO</Link>
        <Link to="/">SOBRE</Link>
      </Navigation>
      <Divulgation>
        <figure>
          <img
            src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1607665355698-home-sliderdesktop.jpg"
            alt="Propaganda"
          />
          <img
            src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-23d6f3b0-34bf-450a-8022-0e67855da4fe.jpg"
            alt="Propaganda"
          />
          <img
            src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mlb-home-desktop-slider-picture-da53a385-3b5e-4b0f-975a-2af689fee339.jpg"
            alt="Propaganda"
          />
        </figure>
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
