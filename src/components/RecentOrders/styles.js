import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

export const OrdersContainer = styled.ul`
  margin-top: 1.2rem;
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
`;

export const Card = styled.li`
  width: 34rem;
  flex-shrink: 0;
  background-color: white;
  padding: 1.8rem;
  border-radius: 0.8rem;
  border: 1px solid #8a8a8a;
`;
