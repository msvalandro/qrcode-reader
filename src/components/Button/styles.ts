import styled, { css } from 'styled-components';

interface ContainerProps {
  isDisabled?: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: none;
  outline: none;
  border: 1px solid #2d3436;
  color: #2d3436;
  border-radius: 8px;
  height: 40px;
  padding: 0 20px;

  &:active {
    background: #2d3436;
    color: #fff;
  }

  ${props =>
    props.isDisabled &&
    css`
      border-color: #b2bec3;
      color: #b2bec3;
    `}
`;
