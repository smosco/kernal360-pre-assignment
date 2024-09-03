import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
import { formatDate } from '../lib/formatDate';

const OrderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderDetail = styled.div`
  h3 {
    font-size: ${(props) => props.titleFontSize || '16px'};
    font-weight: 500;
  }
  p {
    font-size: ${(props) => props.dateFontSize || '14px'};
    color: #797b7e;
  }
`;

const OrderHeader = ({ no, orderedAt, user, titleFontSize, dateFontSize }) => {
  return (
    <OrderHeaderContainer>
      <OrderDetail titleFontSize={titleFontSize} dateFontSize={dateFontSize}>
        <h3>Order #{no}</h3>
        <p>{formatDate(orderedAt)}</p>
      </OrderDetail>
      <UserProfile user={user} />
    </OrderHeaderContainer>
  );
};

export default OrderHeader;
