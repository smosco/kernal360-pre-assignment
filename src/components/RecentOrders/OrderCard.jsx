import UserProfile from '../../common/UserProfile/UserProfile';
import { Card, OrderDetail } from './styles';

const OrderCard = () => {
  return (
    <Card>
      <OrderDetail>
        <h3>Order #351</h3>
        <p>05 Feb 2023,08:23 PM</p>
      </OrderDetail>
      <UserProfile />
    </Card>
  );
};

export default OrderCard;
