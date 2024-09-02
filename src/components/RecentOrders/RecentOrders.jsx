import { Wrapper, Title, OrdersContainer } from './styles';
import OrderCard from './OrderCard';

const RecentOrders = () => {
  return (
    <Wrapper>
      <Title>Recent Orders</Title>
      <OrdersContainer>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </OrdersContainer>
    </Wrapper>
  );
};

export default RecentOrders;
