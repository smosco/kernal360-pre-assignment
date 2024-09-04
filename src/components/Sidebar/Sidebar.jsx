import { SidebarContainer, Wrapper, SidebarItemList, Logo } from './styles';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

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
  const [selected, setSelected] = useState('ORDER HISTORY');
  const handleClick = (label) => {
    setSelected(label);
  };
  return (
    <SidebarContainer>
      <Wrapper>
        <Logo>KernelOrder</Logo>
        <SidebarItemList>
          {sideMenus.map((item, idx) => {
            return (
              <SidebarItem
                key={idx}
                to={item.to}
                label={item.label}
                icon={item.icon}
                isSelected={selected === item.label ? true : false}
                onClick={handleClick}
              />
            );
          })}
        </SidebarItemList>
      </Wrapper>
      <SidebarItem
        label='LOGOUT'
        icon='LogOut'
        onClick={() => {
          console.log('로그아웃 함수');
        }}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
