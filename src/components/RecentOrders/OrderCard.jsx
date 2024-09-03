import UserProfile from '../../common/UserProfile/UserProfile';
import { Card, OrderDetail } from './styles';
import { formatDate } from '../../lib/formatDate';

const OrderCard = ({ order }) => {
  const { no, orderedAt, user } = order;
  return (
    <Card>
      <OrderDetail>
        <h3>Order #{no}</h3>
        <p>{formatDate(orderedAt)}</p>
      </OrderDetail>
      <UserProfile user={user} />
    </Card>
  );
};

export default OrderCard;
