import { Wrapper, Title, OrdersContainer } from './styles';
import OrderCard from './OrderCard';

const RecentOrders = ({ orders }) => {
  return (
    <Wrapper>
      <Title>Recent Orders</Title>
      <OrdersContainer>
        {orders.map((order) => {
          return <OrderCard key={order.no} order={order} />;
        })}
      </OrdersContainer>
    </Wrapper>
  );
};

export default RecentOrders;
