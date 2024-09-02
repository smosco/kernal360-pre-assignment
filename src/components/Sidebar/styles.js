import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.6rem 2rem;
`;

export const Logo = styled.div`
  font-size: 3.2rem;
  font-weight: 600;
  color: #f95e07;
`;

export const SidebarItemList = styled.ul`
  margin-top: 8.2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2rem 1.4rem;
  border-radius: 0.8rem;
  cursor: pointer;
`;

export const ItemLabel = styled.span`
  font-size: 1.2rem;
`;
