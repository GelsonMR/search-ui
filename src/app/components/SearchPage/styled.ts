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
