import { DashboardContainer, ContentContainer } from './styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import RecentOrders from '../../components/RecentOrders/RecentOrders';
import OrderList from '../../components/OrderList/OrderList';
import ordersData from '../../data/orders.json';
import recentOrdersData from '../../data/recent-orders.json';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <ContentContainer>
        <Header />
        <RecentOrders orders={recentOrdersData} />
        <OrderList orders={ordersData} />
      </ContentContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
