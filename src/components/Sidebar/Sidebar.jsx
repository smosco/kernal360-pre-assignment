import { SidebarContainer, SidebarItemList, Logo } from './styles';
import SidebarItem from './SidebarItem';

const sideMenus = [
  {
    to: '/',
    label: 'HOME',
    icon: 'House',
  },
  {
    to: '/',
    label: 'ORDER HISTORY',
    icon: 'History',
  },
  {
    to: '/',
    label: 'MESSAGES',
    icon: 'Mail',
  },
  {
    to: '/',
    label: 'STATISTICS',
    icon: 'ChartColumnIncreasing',
  },
  {
    to: '/',
    label: 'PRODUCTS',
    icon: 'ScanBarcode',
  },
  {
    to: '/',
    label: 'SETTINGS',
    icon: 'Settings2',
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo>KernelOrder</Logo>
      <SidebarItemList>
        {sideMenus.map((item, idx) => {
          return (
            <SidebarItem
              key={idx}
              to={item.to}
              label={item.label}
              icon={item.icon}
            />
          );
        })}
      </SidebarItemList>
      <SidebarItem label='LOGOUT' icon='LogOut' />
    </SidebarContainer>
  );
};

export default Sidebar;
