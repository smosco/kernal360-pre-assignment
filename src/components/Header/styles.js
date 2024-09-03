import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchContainer = styled.div`
  display: hidden;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 1rem;
  padding: 1.3rem 1.8rem;
  border: 1px solid #f5f5f5;
`;

export const SearchInput = styled.input`
  background-color: transparent;
  min-width: 40rem;
  font-size: 1.6rem;
  outline: none;
  border: none;
  margin-left: 1.9rem;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  /* UserContainer 찌그러지지 않게 */
  flex-shrink: 0;
`;
