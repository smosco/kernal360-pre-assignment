import { ItemContainer, ItemImg, ItemDetail, Price } from './styles';

const OrderItem = ({ item }) => {
  const { name, description, image, quantity, pricing } = item;
  const { price, discountPrice, isOnSale } = pricing;

  return (
    <ItemContainer>
      <ItemImg src={image} alt={name} />
      <ItemDetail>
        <h3>{name}</h3>
        <p>{description}</p>
        <Price>
          <span>${price}</span>
          {isOnSale && discountPrice && <span>Sale: ${discountPrice}</span>}
          <span>Qty: {quantity}</span>
        </Price>
      </ItemDetail>
    </ItemContainer>
  );
};

export default OrderItem;
