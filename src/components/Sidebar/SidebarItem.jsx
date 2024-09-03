import { MenuLink, ItemLabel } from './styles';
import Icon from '../../common/Icon';

const SidebarItem = ({ to, label, icon }) => {
  return (
    <MenuLink to={to}>
      <Icon name={icon} size={22} />
      <ItemLabel>{label}</ItemLabel>
    </MenuLink>
  );
};

export default SidebarItem;
