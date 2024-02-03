import { Navbar } from '@/components/shared';

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="p-[5rem]">
        <input
          type="text"
          className="mt-[2rem] px-4 py-1 w-9/12 border-2 border-black rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Search your course here..."
        />

        <button className="px-4 py-1 w-3/12 border-2 border-black rounded-lg bg-[#D99F03]">
          Add custom video
        </button>
      </div>
    </>
  );
};

export default Dashboard;
