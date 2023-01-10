import port3 from '../styles/img/port3.jpeg'
import '../styles/pages/AboutMe.css'



const AboutMe = () => (
    <section className='about-me'>
        <div className='image-me'>
            <img src={port3} alt="yo" />
        </div>
        <div className='text-me'>
            <h1>Hello I`m Sebastian Gutierrez Guisao</h1>
            <h1>Software developer frontend</h1>
            <h2>Geek, Videogames</h2>
            {/* <p>I'm a software developer, my forte is frontend development, in the last years I've
                been preparing myself and continue learning new skills mostly with react and
                javascript.
                I try to keep a curious mentality of wanting to learn more every day, my goal is to
                become a fullstack developer.</p> */}
            <div className="elementor-element elementor-element-62c88949 elementor-widget elementor-widget-coco-button" data-id="62c88949" data-element_type="widget" data-widget_type="coco-button.default">
                <div className="elementor-widget-container">
                    <a className="coco-button slow-scroll" href="../styles/files/sebastiangutierrez-1.pdf" target="_blank" rel="nofollow">
                        <span>DOWNLOAD CV</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default AboutMe;