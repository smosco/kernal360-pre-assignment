import styled from 'styled-components';
import UserProfile from './UserProfile/UserProfile';
import { formatDate } from '../lib/formatDate';

const OrderHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderDetail = styled.div`
  span {
    display: block;
  }

  .order-number {
    font-size: ${(props) => props.$titleFontSize || '16px'};
    font-weight: 500;
    color: #333;
  }

  .order-date {
    font-size: ${(props) => props.$dateFontSize || '14px'};
    color: #797b7e;
  }
`;

const OrderHeader = ({ no, orderedAt, user, titleFontSize, dateFontSize }) => {
  return (
    <OrderHeaderContainer>
      <OrderDetail $titleFontSize={titleFontSize} $dateFontSize={dateFontSize}>
        <span className='order-number'>Order #{no}</span>
        <span className='order-date'>{formatDate(orderedAt)}</span>
      </OrderDetail>
      <UserProfile user={user} size='5rem' />
    </OrderHeaderContainer>
  );
};

export default OrderHeader;
