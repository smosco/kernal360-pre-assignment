import { Wrapper, Title, OrderListContainer } from './styles';
import Order from './Order';
import OrdersData from '../../data/orders.json';

const OrderList = () => {
  return (
    <Wrapper>
      <Title>Order List</Title>
      <OrderListContainer>
        {OrdersData.map((order) => {
          return <Order key={order.no} order={order} />;
        })}
      </OrderListContainer>
    </Wrapper>
  );
};

export default OrderList;
