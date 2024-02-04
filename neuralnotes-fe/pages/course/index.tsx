import course1Img from '../../public/course1.png'
import course2Img from '../../public/course2.png'
import course3Img from '../../public/course3.png'
import course4Img from '../../public/course4.png'
import course5Img from '../../public/course5.png'

import Image from 'next/image';
import Link from 'next/link';

const Courses = () => {

  const courses = [
    {code: 'CSOR4231', image:course1Img, name:'Analysis Algorithms'},
    {code: 'COMS4705', image:course2Img, name:'Natural Language Processing'},
    {code: 'COMS4323', image:course3Img, name:'User Interface Design'},
    {code: 'COMS2938', image:course4Img, name:'Cloud Computing'},
    {code: 'CSEE2435', image:course5Img, name:'Advance Database Systems'},
  ]

  return (
    <div className="p-[5rem]">

      {/* <input
        type="text"
        className="customInput"
        placeholder="Search your course here..."
      />

      <h1 className='text-center'>OR</h1> */}


<br/>
      <h1 style={{fontSize: '4rem'}}>COURSES</h1>

      <div className='containerCourses'>
        {courses.map(course => (
          <Link href={`/course/${course.code}`}>
            <Image src={course.image} alt={course.name} className='imgCourses'/>
            <h1 className="pt-2">{course.code}</h1>
            <h3>{course.name}</h3>
          </Link>
        ))}
      </div>

          <br/>
          <br/>
          <br/>
          <br/>
      <div className='flex justify-center align-center text-center'>
        <Link href="/course/add-custom-video" className="btn">
          Add custom video
        </Link>
      </div>

    </div>
  );
};

export default Courses;
