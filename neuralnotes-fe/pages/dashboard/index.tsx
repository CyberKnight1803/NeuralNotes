import CourseCard from '@/components/dashboard/course-card';
import { Navbar } from '@/components/shared';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <div className="p-[5rem]">
      <div className="flex items-end justify-center">
        <input
          type="text"
          className="customInput"
          placeholder="Search your course here..."
        />
        <Link href="/dashboard/add-custom-video" className="btn">
          Add custom video
        </Link>
      </div>
      <div className="py-10 px-2">
        <CourseCard />
      </div>
    </div>
  );
};

export default Dashboard;
