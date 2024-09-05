import { Wrapper, Title, OrderListContainer } from './styles';
import Order from './Order';

const OrderList = ({ orders }) => {
  return (
    <Wrapper>
      <Title>Order List</Title>
      <OrderListContainer>
        {orders.map((order) => {
          return <Order key={order.no} order={order} />;
        })}
      </OrderListContainer>
    </Wrapper>
  );
};

export default OrderList;
