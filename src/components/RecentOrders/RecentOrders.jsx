import { Wrapper, Title, OrdersContainer } from './styles';
import OrderCard from './OrderCard';
import RecentOrdersData from '../../data/recent-orders.json';

const RecentOrders = () => {
  return (
    <Wrapper>
      <Title>Recent Orders</Title>
      <OrdersContainer>
        {RecentOrdersData.map((order) => {
          return <OrderCard order={order} />;
        })}
      </OrdersContainer>
    </Wrapper>
  );
};

export default RecentOrders;
