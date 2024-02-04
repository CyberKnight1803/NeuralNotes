import course3Img from '../../public/course3.png'
import Image from 'next/image';

const Dashboard = () => {

    const lectures = [
        {name: 'Course Logistics', image:course3Img, pdfLink:'', number:'01'},
        {name: 'Introduction', image:course3Img, pdfLink:'', number:'02'},
        {name: 'Language Modeling: Part 1', image:course3Img, pdfLink:'https://drive.google.com/file/d/17nqS364abEcCNAshF71NPXasnBEwaYIE/view?usp=sharing', number:'03'},
        {name: 'Language Modeling: Part 2', image:course3Img, pdfLink:'https://drive.google.com/file/d/1AzNPfv_IBvgRsFNdsOv3Ay6ycrxk8X1l/view?usp=sharing', number:'04'},
    ]


  return (
    <div className="p-[5rem] blurContainer">
        <div className='containerCourse'>
            <Image
                src={course3Img}
                alt="Course 1"
                width={350}
                height={250}
                className='imgCourse'
            />

            <div className='descCourse'>
                <h1>COMS4323</h1>
                <h2>User Interface Design</h2>
                <p>Explore the fundamentals of Natural Language Processing (NLP) in this dynamic course. Dive into the world of linguistic analysis, machine learning, and AI applications. Gain essential skills in text processing, sentiment analysis, and language modeling to harness the power of NLP in various domains. Unlock the potential of language data!</p>
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
                    <button className='btnPurple'>
                        <a href={lec.pdfLink} target="_blank" download>Download pdf</a>
                    </button>
                </div>
            ))}
        </div>

    </div>
  );
};

export default Dashboard;
