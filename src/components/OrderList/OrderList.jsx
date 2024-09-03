import { Wrapper, Title, OrderListContainer } from './styles';
import Order from './Order';

const OrderList = () => {
  return (
    <Wrapper>
      <Title>Order List</Title>
      <OrderListContainer>
        <Order />
        <Order />
        <Order />
        <Order />
      </OrderListContainer>
    </Wrapper>
  );
};

export default OrderList;
