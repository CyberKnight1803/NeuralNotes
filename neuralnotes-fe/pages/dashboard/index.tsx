import { Navbar } from '@/components/shared';
import Image from 'next/image';
import MainPng from '../../public/main.png'

const Dashboard = () => {
  return (
    <div className="p-[5rem]">

        <input
          type="text"
          className="customInput"
          placeholder="Search your course here..."
        />

        <button className="btn">
          Add custom video
        </button>

        <Image
          src={MainPng}
          alt="Course 1"
          width={350}
          height={250}
        />
        <h1>COMS1257</h1>
        <h3>User Interface Design</h3>

    </div>
  );
};

export default Dashboard;
