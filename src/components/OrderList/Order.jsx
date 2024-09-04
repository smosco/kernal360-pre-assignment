import Icon from '../../common/Icon';
import { OrderItemContainer, Bottom, ButtonContainer } from './styles';
import OrderItem from './OrderItem';
import OrderHeader from '../../common/OrderHeader';

const Order = ({ order }) => {
  const { no, items, orderedAt, status, user } = order;

  const renderButton = (buttonStatus, isConfirmed = false) => (
    <button className={buttonStatus}>
      <Icon
        name={buttonStatus === 'completed' ? 'Check' : 'X'}
        color={buttonStatus === 'completed' ? '#87B6A1' : '#DB79A9'}
      />
      {isConfirmed && buttonStatus.toUpperCase()}
    </button>
  );

  return (
    <OrderItemContainer>
      <OrderHeader no={no} orderedAt={orderedAt} user={user} />
      {items.map((item, idx) => {
        // 할인 가격, 세일 상태 등 미래에 추가될 데이터를 쉽게 반영할 수 있도록 유연한 구조
        // pricing 객체 생성
        const pricing = {
          price: item.price,
          discountPrice: item.discountPrice || null,
          isOnSale: item.isOnSale || false,
        };

        return <OrderItem key={idx} item={{ ...item, pricing }} />;
      })}
      <Bottom>
        <span>X{items.length} items</span>
        <ButtonContainer>
          {status === 'waiting' ? (
            // 주문 요청 확인 중
            <>
              {renderButton('rejected')}
              {renderButton('completed')}
            </>
          ) : (
            // 주문 요청 확인 후 수락, 거절 상태
            renderButton(status, true)
          )}
        </ButtonContainer>
      </Bottom>
    </OrderItemContainer>
  );
};

export default Order;
