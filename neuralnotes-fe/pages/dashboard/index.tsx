import CourseCard from '@/components/dashboard/course-card';
import { Navbar } from '@/components/shared';

const Dashboard = () => {
  return (
    <div className="p-[5rem]">
      <div className="flex items-end justify-center">
        <input
          type="text"
          className="customInput"
          placeholder="Search your course here..."
        />
        <button className="btn">Add custom video</button>
      </div>
      <div className="py-10 px-2">
        <CourseCard />
      </div>
    </div>
  );
};

export default Dashboard;
