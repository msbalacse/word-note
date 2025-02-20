import MyTable from "../Component/MyTable";
import NewEntry from "../Component/NewEntry";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
      <NewEntry />
      <MyTable />
    </div>
  );
};

export default Dashboard;
