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

const Order = ({ order }) => {
  const { no, items, orderedAt, status, user } = order;

  return (
    <OrderItemContainer>
      <Top>
        <OrderDetail>
          <h3>Order #${no}</h3>
          <p>{orderedAt}</p>
        </OrderDetail>
        <UserProfile user={user} />
      </Top>
      {items.map((item) => {
        return <OrderItem item={item} />;
      })}
      <Bottom>
        <span>X{items.length} items</span>
        <ButtonContainer>
          <button className={status}>
            <Icon name='X' color='#DB79A9' />
          </button>
          <button className={status}>
            <Icon name='Check' color='#87B6A1' />
          </button>
        </ButtonContainer>
      </Bottom>
    </OrderItemContainer>
  );
};

export default Order;
