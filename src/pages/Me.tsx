import port3 from '../styles/img/port3.jpeg'
import '../styles/pages/Me.css'

const Me = () => (
    <section className='me'>
        <div className='image-me'>
            <img src={port3} alt="yo" />
        </div>
        <div className='text-me'>
            <h1>Hello I`m Sebastian Gutierrez Guisao</h1>
            <h1>Software developer frontend</h1>
            <h2>Geek, Videogames</h2>
            <div className="aboutMe-CV">
                <div className="item button-parrot">
                    <button className='buttonCV'>
                        <a href="https://github.com/Sgutierrezgf/sgutierrezcv/raw/main/src/styles/files/sebastiangutierrez-1.pdf">
                            DOWNLOAD MY CV
                        </a>
                        <div className="parrot"></div>
                        <div className="parrot"></div>
                        <div className="parrot"></div>
                        <div className="parrot"></div>
                        <div className="parrot"></div>
                        <div className="parrot"></div>
                    </button>
                </div>
            </div>
        </div>
    </section >
)

export default Me;