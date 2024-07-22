import styled from 'styled-components';

export const Container = styled.main`
  font-family: Outfit, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  width: 160px;
  flex-shrink: 0;
`;

export const SearchContainer = styled.label`
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

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  font-size: 16px;

  @media (min-width: 768px) {
    padding: 24px 0 24px 204px;
  }
`;

export const Link = styled.a`
  align-items: center;
  font-size: 20px;
  vertical-align: middle;
`;

export const CategoryBadge = styled.span`
  font-size: 12px;
  font-weight: bold;
  padding: 2px 6px;
  background-color: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.6);
  text-decoration: none !important;
  border-radius: 4px;
  margin-left: 8px;
`;
