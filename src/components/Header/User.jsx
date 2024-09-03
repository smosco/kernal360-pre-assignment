import UserProfile from '../../common/UserProfile/UserProfile';
import Icon from '../../common/Icon';
import { UserContainer } from './styles';

const User = () => {
  const user = { name: 'Unknown', image: '' };
  return (
    <UserContainer>
      <Icon name='Bell' size='20' color='#8E92BC' />
      <UserProfile user={user} />
    </UserContainer>
  );
};

export default User;
