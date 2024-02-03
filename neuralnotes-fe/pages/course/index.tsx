import CourseCard from '@/components/dashboard/course-card';
import MainPng from '../../public/main.png'
import Image from 'next/image';
import Link from 'next/link';

const Courses = () => {

  const courses = [
    {code: 'COMS4323', image:MainPng, name:'User Interface Design'},
    {code: 'COMS2345', image:MainPng, name:'User Interface Design'},
    {code: 'COMS4323', image:MainPng, name:'User Interface Design'},
    {code: 'COMS2938', image:MainPng, name:'User Interface Design'},
    {code: 'CSEE2435', image:MainPng, name:'User Interface Design'},
  ]

  return (
    <div className="p-[5rem]">

      <input
        type="text"
        className="customInput"
        placeholder="Search your course here..."
      />

      <h1 className='text-center'>OR</h1>

      <div className='flex justify-center align-center text-center'>
        <Link href="/course/add-custom-video" className="btn">
          Add custom video
        </Link>
      </div>

      <div className='containerCourses'>
        {courses.map(course => (
          <Link href={`/course/${course.code}`}>
            <Image src={MainPng} alt={course.name} className='imgCourses'/>
            <h1 className="pt-2">{course.code}</h1>
            <h3>{course.name}</h3>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Courses;
