import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  font-size: 16px;

  @media (min-width: 768px) {
    padding: 24px 0 24px 204px;
  }
`;
