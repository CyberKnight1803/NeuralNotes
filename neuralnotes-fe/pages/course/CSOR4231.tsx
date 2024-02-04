import course1Img from '../../public/course1.png'
import Image from 'next/image';
import { useRouter } from 'next/router'

const Dashboard = () => {

    const router = useRouter();

    const {id} = router.query;

    const lectures = [
        {name: 'Linear Programming', youtubeLink:'', image:course1Img, pdfLink:'https://drive.google.com/file/d/1OVicLcND45YpRuh8vGAebNa1JjrTPWbW/view?usp=sharing', number:'01'},
    ]


  return (
    <div className="p-[5rem]">
        <div className='containerCourse'>
            <Image
                src={course1Img}
                alt="Course 1"
                width={350}
                height={250}
                className='imgCourse'
            />

            <div className='descCourse'>
                <h1>CSOR4231</h1>
                <h2>Analysis of Algorithms</h2>
                <p>Explore the fundamentals of algorithm analysis in this comprehensive course. Learn techniques to assess algorithm efficiency, time complexity, and space complexity. Gain practical insights into designing and optimizing algorithms, crucial for making informed decisions in software development. Master the art of efficient problem-solving through rigorous algorithmic analysis.</p>
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
                    <button className='btnPurple mr-3'>
                        <a href={lec.pdfLink} target="_blank" download>Download pdf</a>
                    </button>
                    <button className='btnPurple'>
                        <a href={lec.youtubeLink} target="_blank" download>Watch Video</a>
                    </button>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Dashboard;
