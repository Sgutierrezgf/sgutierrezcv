import { GithubOutlined, DribbbleOutlined } from '@ant-design/icons'
import '../styles/pages/Portfolio.css'


const Portfolio = () => (
    <section className="main-container" id='portfolio'>
        <h1>Portfolio</h1>
        <div className="cards-container">
            <div className="card">
                <div className="content">
                    <div className="front ecommerce">
                    </div>

                    <div className="back">
                        <h3>ecommerce-mono</h3>
                        <p>NextJS, Tailwind, Typescript</p>
                        <p>Ecommerce made with NextJS, Typescript and Tailwind,
                            on the frontend, all this as a way to practice and learn new development technologies.</p>
                        <div className='icons'>
                            <a href='https://github.com/Ragnarok99/ecommerce-mono/tree/main/apps/web' target='_blank' rel='noreferrer'>
                                <GithubOutlined style={{ fontSize: '2rem' }} />
                            </a>
                            <a href="https://ecommerce-mono.vercel.app" target='_blank' rel='noreferrer'>
                                <DribbbleOutlined style={{ fontSize: '2rem' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="front todo">
                    </div>

                    <div className="back">
                        <h3>TO-DO</h3>
                        <p>ReactJS, CSS, Javascript, React-Router</p>
                        <p>To-do list, created with react, javascipt and css.</p>
                        <div className='icons'>
                            <a href='https://github.com/Sgutierrezgf/todo' target='_blank' rel='noreferrer'>
                                <GithubOutlined style={{ fontSize: '2rem' }} />
                            </a>
                            <a href="https://sgutierrezgf.github.io/todo/" target='_blank' rel='noreferrer'>
                                <DribbbleOutlined style={{ fontSize: '2rem' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="front JS">
                    </div>

                    <div className="back">
                        <h3>Practice javascript</h3>
                        <p>HTML, CSS, Javascript</p>
                        <p>application made with HTML, CSS and JS.
                            practice of basic concepts of the above mentioned.</p>
                        <div className='icons'>
                            <a href='https://github.com/Sgutierrezgf/Curso-practico-javascript' target='_blank' rel='noreferrer'>
                                <GithubOutlined style={{ fontSize: '2rem' }} />
                            </a>
                            <a href="https://sgutierrezgf.github.io/Curso-practico-javascript/" target='_blank' rel='noreferrer'>
                                <DribbbleOutlined style={{ fontSize: '2rem' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <div className="card">
                <div className="content">
                    <div className="front game">
                    </div>

                    <div className="back">
                        <h3>Game javascript</h3>
                        <p>HTML, CSS, Javascript</p>
                        <p>Game entirely made with javascript.
                        </p>
                        <div className='icons'>
                            <a href='https://github.com/Sgutierrezgf/Taller-practico-javascript-videojuego' target='_blank' rel='noreferrer'>
                                <GithubOutlined style={{ fontSize: '2rem' }} />
                            </a>
                            <a href="https://sgutierrezgf.github.io/Taller-practico-javascript-videojuego/" target='_blank' rel='noreferrer'>
                                <DribbbleOutlined style={{ fontSize: '2rem' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="content">
                    <div className="front api">
                    </div>

                    <div className="back">
                        <h3>Apirest javascript</h3>
                        <p>HTML, CSS, Javascript</p>
                        <p>page created with a movie api and captured with javascript.
                        </p>
                        <div className='icons'>
                            <a href='https://github.com/Sgutierrezgf/Curso-practico-consume-ApiRest-JS' target='_blank' rel='noreferrer'>
                                <GithubOutlined style={{ fontSize: '2rem' }} />
                            </a>
                            <a href="https://sgutierrezgf.github.io/Curso-practico-consume-ApiRest-JS/" target='_blank' rel='noreferrer'>
                                <DribbbleOutlined style={{ fontSize: '2rem' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
)

export default Portfolio;