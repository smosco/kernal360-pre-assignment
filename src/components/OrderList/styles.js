import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

export const OrderListContainer = styled.ul`
  margin-top: 1.6rem;
  display: grid;
  grid-template-columns: repeat(3, 34rem); /* 각 열의 너비를 34rem로 고정 */
  gap: 3rem;
`;

export const OrderItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 34rem;
  padding: 2rem;
  background-color: white;
  border: 1px solid #797b7e;
  border-radius: 1rem;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.6rem;
    font-weight: 500;
  }

  p {
    font-size: 1.4rem;
    color: #797b7e;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
    color: #797b7e;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;

  button {
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    background-color: white;
    border: none;

    &.completed {
      border: 1px solid #87b6a1;
    }
    &.reject {
      border: 1px solid #db79a9;
    }
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #e3e3e3;
`;

export const ItemImg = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid black;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  p {
    font-size: 1.4rem;
    color: #797b7e;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.4rem;
  }
`;
