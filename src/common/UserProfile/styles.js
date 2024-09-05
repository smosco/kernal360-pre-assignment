import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileImage = styled.img`
  width: ${(props) => props.$sizeOfImg};
  height: ${(props) => props.$sizeOfImg};
  border-radius: 50%;
  object-fit: cover;
`;
