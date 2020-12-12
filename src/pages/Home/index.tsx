import React from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { Header, Form } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <img src="dfsdf" alt="Logo da Loja" />
        <Form>
          <input placeholder="Buscar produtos, marcas, lojas e muito mais..." />
          <button type="submit">
            <BiSearchAlt2 size={25} />
          </button>
        </Form>
      </Header>
    </>
  );
};

export default Home;
