import port3 from '../styles/img/port3.jpeg'
import '../styles/pages/AboutMe.css'



const AboutMe = () => (
    <section className='about-me'>
        <div className='image-me'>
            <img src={port3} alt="yo" />
        </div>
        <div className='text-me'>
            <h1>Software developer frontend</h1>
            <h2>Geek</h2>
            <h3>Videogames</h3>
            <p>I'm a software developer, my forte is frontend development, in the last years I've
                been preparing myself and continue learning new skills mostly with react and
                javascript.
                I try to keep a curious mentality of wanting to learn more every day, my goal is to
                become a fullstack developer.</p>
        </div>
    </section>
)

export default AboutMe;