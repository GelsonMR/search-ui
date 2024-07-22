import styled from 'styled-components';

export const Container = styled.label`
  flex: 1;
  display: flex;
  border-radius: 24px;
  height: 48px;
  width: 300px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  transition: 200ms ease-in-out;

  &:focus-within {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.24);
  }
`;

export const Input = styled.input`
  flex: 1;
  font-family: Outfit, sans-serif;
  font-size: 16px;
  border-radius: 24px;
  background: none;
  padding-left: 20px;
  outline: none;
`;

export const Button = styled.button`
  font-family: Outfit, sans-serif;
  font-size: 16px;
  border-radius: 24px;
  cursor: pointer;
  background: none;
  padding: 0 16px;
  margin: 4px;
  outline: none;
  font-weight: bold;
  transition: 200ms ease-in-out;

  &:focus {
    background-color: rgba(0, 0, 0, 0.12);
  }
`;
