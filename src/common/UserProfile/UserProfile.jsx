import { Container, ProfileImage } from './styles';

const UserProfile = ({ user, size }) => {
  const { name, image } = user;
  return (
    <Container>
      <ProfileImage
        src={
          image ||
          'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        alt={name}
        $sizeOfImg={size}
      />
    </Container>
  );
};
export default UserProfile;
