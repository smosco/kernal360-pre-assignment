import { Container, ProfileImage } from './styles';

const UserProfile = () => {
  return (
    <Container>
      <ProfileImage
        src='https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='user-img'
      />
    </Container>
  );
};

export default UserProfile;
