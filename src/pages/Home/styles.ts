import styled from 'styled-components';

export const Header = styled.header`
  height: 200px;
  padding: 30px 20px;
  background: #f7b731;
  color: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const UserInfo = styled.div`
  margin-bottom: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OptionsList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
  gap: 20px;

  a {
    text-decoration: none;
    color: #2d3436;
  }
`;

export const Option = styled.li`
  height: 100%;
  background: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 15px;
  }
`;
