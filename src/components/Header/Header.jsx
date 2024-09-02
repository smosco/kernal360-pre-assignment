import { HeaderContainer, SearchBar } from './styles';
import User from './User';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar placeholder='Search' />
      <User />
    </HeaderContainer>
  );
};

export default Header;
