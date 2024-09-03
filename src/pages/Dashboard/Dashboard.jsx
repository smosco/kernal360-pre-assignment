import { DashboardContainer, ContentContainer } from './styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import RecentOrders from '../../components/RecentOrders/RecentOrders';
import OrderList from '../../components/OrderList/OrderList';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <RecentOrders />
        <OrderList />
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
