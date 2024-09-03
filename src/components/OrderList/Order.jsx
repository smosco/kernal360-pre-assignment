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

const Order = () => {
  return (
    <OrderItemContainer>
      <Top>
        <OrderDetail>
          <h3>Order #349</h3>
          <p>05 Feb 2023, 08:28PM</p>
        </OrderDetail>
        <UserProfile />
      </Top>
      <OrderItem />
      <OrderItem />
      <Bottom>
        <span>X2 items</span>
        <ButtonContainer>
          <button className='reject'>
            <Icon name='X' color='#DB79A9' />
          </button>
          <button className='completed'>
            <Icon name='Check' color='#87B6A1' />
          </button>
        </ButtonContainer>
      </Bottom>
    </OrderItemContainer>
  );
};

export default Order;
