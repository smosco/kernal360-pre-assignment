import { MenuLink, ItemLabel } from './styles';
import Icon from '../../common/Icon';

const SidebarItem = ({ to, label, icon, isSelected, onClick }) => {
  return (
    <MenuLink
      to={to}
      $isSelected={isSelected}
      onClick={() => {
        onClick(label);
      }}
    >
      <Icon name={icon} size={22} color={isSelected ? '#FF8144' : 'black'} />
      <ItemLabel>{label}</ItemLabel>
    </MenuLink>
  );
};

export default SidebarItem;
