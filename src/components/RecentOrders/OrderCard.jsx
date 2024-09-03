import UserProfile from '../../common/UserProfile/UserProfile';
import { Card, OrderDetail } from './styles';

const OrderCard = ({ order }) => {
  const { no, orderedAt, user } = order;
  return (
    <Card>
      <OrderDetail>
        <h3>Order #{no}</h3>
        <p>{orderedAt}</p>
      </OrderDetail>
      <UserProfile user={user} />
    </Card>
  );
};

export default OrderCard;
