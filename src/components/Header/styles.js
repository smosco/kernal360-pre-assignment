import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchBar = styled.input`
  padding: 1.3rem 1.8rem;
  border-radius: 1rem;
  min-width: 40rem;
  font-size: 1.6rem;
  border: none;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  /* UserContainer 찌그러지지 않게 */
  flex-shrink: 0;
`;
