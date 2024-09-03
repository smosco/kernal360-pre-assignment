import { ItemContainer, ItemImg, ItemDetail, Price } from './styles';

const OrderItem = () => {
  return (
    <ItemContainer>
      <ItemImg src='https://images.pexels.com/photos/2619970/pexels-photo-2619970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <ItemDetail>
        <h3>Vegetable Mixups</h3>
        <p>Vegetable Fritters with Egg</p>
        <Price>
          <span>$5.30</span>
          <span>Qty: 1</span>
        </Price>
      </ItemDetail>
    </ItemContainer>
  );
};

export default OrderItem;
