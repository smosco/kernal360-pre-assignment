import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

export const OrdersContainer = styled.ul`
  display: flex;
  gap: 2rem;
  overflow-x: scroll;
`;

export const Card = styled.li`
  display: flex;
  gap: 7rem;
  flex-shrink: 0;
  background-color: white;
  padding: 1.8rem;
  border-radius: 0.8rem;
  border: 1px solid #7a7a7a;
`;

export const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
    color: #797b7e;
  }
`;
