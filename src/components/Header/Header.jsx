import Icon from '../../common/Icon';
import { HeaderContainer, SearchContainer, SearchInput } from './styles';
import User from './User';

const Header = () => {
  return (
    <HeaderContainer>
      <SearchContainer>
        <Icon name='Search' size='24' />
        <SearchInput placeholder='Search' />
      </SearchContainer>
      <User />
    </HeaderContainer>
  );
};

export default Header;
