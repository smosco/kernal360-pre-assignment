import UserProfile from '../../common/UserProfile/UserProfile';
import Icon from '../../common/Icon';
import { UserContainer, IconContainer, NotificationBadge } from './styles';

const User = () => {
  const user = {
    name: 'Unknown',
    image: 'https://cdn-icons-png.flaticon.com/512/6075/6075758.png',
  };

  const hasNotification = true;

  return (
    <UserContainer>
      <IconContainer>
        <Icon name='Bell' size='20' color='#8E92BC' />
        {hasNotification && <NotificationBadge />}
      </IconContainer>
      <UserProfile user={user} size='5rem' />
    </UserContainer>
  );
};

export default User;
