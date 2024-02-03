import Image from 'next/image';
import MainPng from '../../public/main.png'
import { useRouter } from 'next/router'

const Dashboard = () => {

    const router = useRouter();

    const {id} = router.query;

    const lectures = [
        {name: 'Lecture 1', image:MainPng, pdfLink:'', number:'01'},
        {name: 'Lecture 2', image:MainPng, pdfLink:'', number:'02'},
        {name: 'Lecture 3', image:MainPng, pdfLink:'', number:'03'},
        {name: 'Lecture 4', image:MainPng, pdfLink:'', number:'04'},
        {name: 'Lecture 5', image:MainPng, pdfLink:'', number:'05'},
    ]


  return (
    <div className="p-[5rem]">
        <div className='containerCourse'>
            <Image
                src={MainPng}
                alt="Course 1"
                width={350}
                height={250}
                className='imgCourse'
            />

            <div className='descCourse'>
                <h1>{id}</h1>
                <h2>User Interfact Design</h2>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>

            
        <div className='containerLecture'>
            {lectures.map(lec => (
                <div className='lecture'>
                    <div className='opacityImg'>
                        <Image
                            src={lec.image}
                            alt={lec.name}
                            className='imgLecture'
                        />
                        <span className='lectureNumber'>{lec.number}</span>
                    </div>
                    <h2 className='lectureName'>{lec.name}</h2>
                    <button className='btnPurple'>Download PDF</button>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Dashboard;
