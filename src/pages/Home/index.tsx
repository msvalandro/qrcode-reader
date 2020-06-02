import React from 'react';
import { Link } from 'react-router-dom';
import { FiBell, FiMaximize, FiPlusCircle, FiLayers } from 'react-icons/fi';

import { Header, UserInfo, Container, OptionsList, Option } from './styles';
import profile from '../../assets/profile.png';

const Home: React.FC = () => (
  <>
    <Header>
      <UserInfo>
        <div>
          <img src={profile} alt="User" />
          <h3>Olá, Matheus</h3>
        </div>

        <FiBell size={24} />
      </UserInfo>

      <h2
        style={{
          textAlign: 'center',
          textDecoration: 'underline',
          fontStyle: 'italic',
        }}
      >
        TEMPLATE
      </h2>
    </Header>

    <Container>
      <OptionsList>
        <Link to="reader">
          <Option>
            <FiMaximize size={36} />
            <span>Ler produto</span>
          </Option>
        </Link>

        <Link to="register">
          <Option>
            <FiPlusCircle size={36} />
            <span>Cadastrar entrada</span>
          </Option>
        </Link>

        <Link to="multi">
          <Option>
            <FiLayers size={36} />
            <span>Entrada em massa</span>
          </Option>
        </Link>
      </OptionsList>
    </Container>
  </>
);

export default Home;
