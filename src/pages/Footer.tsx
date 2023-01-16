/* eslint-disable jsx-a11y/anchor-is-valid */
import '../styles/pages/Footer.css'
// import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <div className="container__footer">
            <div className="box__footer">
                <h2>Informacion</h2>
                <a href="/about-me">About me</a>
                <a href="/experience">Experience</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact-me">Contact me</a>
            </div>

            <div className="box__footer">
                <h2>Redes Sociales</h2>
                <a href="https://twitter.com/sgutierrez24" target='_blank' rel='noreferrer'>Twitter</a>
                <a href="https://www.linkedin.com/in/sebastian-gutierrez-54b403148/" target='_blank' rel='noreferrer' >Linkedin</a>
                <a href="https://www.instagram.com/sgutierrez2488/" target='_blank' rel='noreferrer'>Instagram</a>
            </div>

        </div>
    </footer>

)


export default Footer;