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

  console.log(status);

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
            <>
              <button className='waiting rejected'>
                <Icon name='X' color='#DB79A9' />
              </button>
              <button className='waiting completed'>
                <Icon name='Check' color='#87B6A1' />
              </button>
            </>
          ) : (
            <button className={status}>
              <Icon
                name={status === 'completed' ? 'Check' : 'X'}
                color={status === 'completed' ? '#87B6A1' : '#DB79A9'}
              />
              {status.toUpperCase()}
            </button>
          )}
        </ButtonContainer>
      </Bottom>
    </OrderItemContainer>
  );
};

export default Order;
