/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { Link } from 'react-scroll'
import '../styles/components/BurguerButton.css'

const BurguerButton = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
    <header className="Cabecera">
      <button
        onClick={toggleMenu}
        className="Cabecera-button">
        <svg className='Cabecera-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <nav className={`Cabecera-nav ${menu ? 'isActive' : ''}`}>
        <ul className="Cabecera-ul">
          <li className="Cabecera-li"><Link to="me" className="Cabecera-a">Me</Link></li>
          <li className="Cabecera-li"><Link to="about-me" className="Cabecera-a">About me</Link></li>
          <li className="Cabecera-li"><Link to="experience" className="Cabecera-a">Experience</Link></li>
          <li className="Cabecera-li"><Link to="portfolio" className="Cabecera-a">Portfolio</Link></li>
          <li className="Cabecera-li"><Link to="contact-me" className="Cabecera-a">Contact me</Link></li>
        </ul>
      </nav>

    </header >
  )
}

export default BurguerButton;