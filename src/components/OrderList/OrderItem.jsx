import { ItemContainer, ItemImg, ItemDetail, Price } from './styles';

const OrderItem = ({ item }) => {
  const { name, price, description, image, quantity } = item;
  return (
    <ItemContainer>
      <ItemImg src={image} />
      <ItemDetail>
        <h3>{name}</h3>
        <p>{description}</p>
        <Price>
          <span>${price}</span>
          <span>Qty: {quantity}</span>
        </Price>
      </ItemDetail>
    </ItemContainer>
  );
};

export default OrderItem;
