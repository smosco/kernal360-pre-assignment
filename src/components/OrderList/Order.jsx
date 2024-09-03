import UserProfile from '../../common/UserProfile/UserProfile';
import Icon from '../../common/Icon';
import {
  OrderItemContainer,
  Top,
  OrderDetail,
  Bottom,
  ButtonContainer,
} from './styles';
import OrderItem from './OrderItem';
import { formatDate } from '../../lib/formatDate';

const Order = ({ order }) => {
  const { no, items, orderedAt, status, user } = order;

  const renderButton = (buttonStatus, isConfirmed = false) => (
    <button className={buttonStatus}>
      <Icon
        name={buttonStatus === 'completed' ? 'Check' : 'X'}
        color={buttonStatus === 'completed' ? '#87B6A1' : '#DB79A9'}
      />
      {isConfirmed && buttonStatus.toUpperCase()}
    </button>
  );

  return (
    <OrderItemContainer>
      <Top>
        <OrderDetail>
          <h3>Order #${no}</h3>
          <p>{formatDate(orderedAt)}</p>
        </OrderDetail>
        <UserProfile user={user} />
      </Top>
      {items.map((item) => {
        return <OrderItem item={item} />;
      })}
      <Bottom>
        <span>X{items.length} items</span>
        <ButtonContainer>
          {status === 'waiting' ? (
            // 주문 요청 확인 중
            <>
              {renderButton('rejected')}
              {renderButton('completed')}
            </>
          ) : (
            // 주문 요청 확인 후 수락, 거절 상태
            renderButton(status, true)
          )}
        </ButtonContainer>
      </Bottom>
    </OrderItemContainer>
  );
};

export default Order;
