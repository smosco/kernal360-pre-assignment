import UserProfile from '../../common/UserProfile/UserProfile';
import Icon from '../../common/Icon';
import { UserContainer } from './styles';

const User = () => {
  const user = {
    name: 'Unknown',
    image: 'https://cdn-icons-png.flaticon.com/512/6075/6075758.png',
  };

  return (
    <UserContainer>
      <Icon name='Bell' size='20' color='#8E92BC' />
      <UserProfile user={user} size='5rem' />
    </UserContainer>
  );
};

export default User;
