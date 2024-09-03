import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  display: flex;
  flex-direction: column;
`;

export const MenuLink = styled(NavLink)`
  width: 24rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 1.4rem;
  border-radius: 0.8rem;
  /* border: 1px solid #ff8144; */
  cursor: pointer;
`;

export const ItemLabel = styled.span`
  font-size: 1.2rem;
`;
