import { Card } from './styles';
import OrderHeader from '../../common/OrderHeader';

const OrderCard = ({ order }) => {
  const { no, orderedAt, user } = order;
  return (
    <Card>
      <OrderHeader
        no={no}
        orderedAt={orderedAt}
        user={user}
        $titleFontSize='24px'
        $dateFontSize='16px'
      />
    </Card>
  );
};

export default OrderCard;
