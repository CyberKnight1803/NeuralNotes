import React from 'react';
import MainPng from '../../public/main.png';
import Image from 'next/image';

const CourseCard = () => {
  return (
    <div>
      <Image src={MainPng} alt="Course 1" width={350} height={250} />
      <h1 className="pt-2">COMS1257</h1>
      <h3>User Interface Design</h3>
    </div>
  );
};

export default CourseCard;
