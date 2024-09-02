import { NavLink } from 'react-router-dom';
import { ItemContainer, ItemLabel } from './styles';
import Icon from '../../common/Icon';

const SidebarItem = ({ to, label, icon }) => {
  console.log(icon);
  return (
    <NavLink to={to}>
      <ItemContainer>
        <Icon name={icon} size={22} />
        <ItemLabel>{label}</ItemLabel>
      </ItemContainer>
    </NavLink>
  );
};

export default SidebarItem;
