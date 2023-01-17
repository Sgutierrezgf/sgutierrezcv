/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/pages/Footer.css'
import { Link } from 'react-scroll'

const Footer = () => (
    <footer>
        <div className="container__footer">
            <div className="box__footer">
                <h2>Informacion</h2>
                <Link to="me" className='Link'>Me</Link>
                <Link to="about-me" className='Link'>About me</Link>
                <Link to="experience" className='Link'>Experience</Link>
                <Link to="portfolio" className='Link'>Portfolio</Link>
                <Link to="contact-me" className='Link'>Contact me</Link>
            </div>

            <div className="box__footer">
                <h2>Redes Sociales</h2>
                <a href="https://twitter.com/sgutierrez24" target='_blank' rel='noreferrer'>Twitter</a>
                <a href="https://www.linkedin.com/in/sebastian-gutierrez-54b403148/" target='_blank' rel='noreferrer' >Linkedin</a>
                <a href="https://www.instagram.com/sgutierrez2488/" target='_blank' rel='noreferrer'>Instagram</a>
                <a href="https://github.com/Sgutierrezgf" target='_blank' rel='noreferrer'>Github</a>
            </div>

        </div>
    </footer>

)


export default Footer;