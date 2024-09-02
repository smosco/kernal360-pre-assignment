import UserProfile from '../../common/UserProfile/UserProfile';
import Icon from '../../common/Icon';
import { UserContainer } from './styles';

const User = () => {
  return (
    <UserContainer>
      <Icon name='Bell' size='20' color='#8E92BC' />
      <UserProfile />
    </UserContainer>
  );
};

export default User;
