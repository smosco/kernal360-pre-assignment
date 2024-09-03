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
  border: 1px solid #8a8a8a;
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
    padding: 1.2rem;
    border-radius: 1rem;
    background-color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    width: fit-content; /* 공통적으로 적용되는 스타일 */
    border: 1px solid transparent; /* 기본 상태에서 투명하게 처리 */

    &.completed,
    &.waiting.completed {
      /* completed 클래스에 대한 스타일 */
      border-color: #87b6a1;
      color: #87b6a1;
    }

    &.rejected,
    &.waiting.rejected {
      /* rejected 클래스에 대한 스타일 */
      border-color: #db79a9;
      color: #db79a9;
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
