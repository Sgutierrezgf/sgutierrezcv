import React from 'react'
import '../styles/pages/AboutMe.css'
import me from '../styles/img/me.jpeg'
import me2 from '../styles/img/me2.jpeg'

const AboutMe = () => {
    return (
        <section className='about-me'>
            <div className="container text-center">
                <div className="row about-me-row">
                    <div className="col-sm-6 aboutMe-text">
                        <h1>About Me</h1>
                        <p>I'm a software developer, my forte is frontend development, in the last years I've
                            been preparing myself and continue learning new skills mostly with react and
                            javascript.
                            I try to keep a curious mentality of wanting to learn more every day, my goal is to
                            become a fullstack developer.</p></div>
                    <div className="col-sm-4 aboutMe-img"><img src={me} alt="me" /></div>
                </div>
                <div className="row about-me-row">
                    <div className="col-sm-6 aboutMe-img"><img src={me2} alt="me2" /></div>
                    <div className="col-sm-4 aboutMe-text">
                        <h1>Activities & interests</h1>
                        <p>Outside my work, I am a quiet
                            person, I like to cook all kinds of
                            food, I like to be at home reading
                            or playing video games.
                            I also like to exercise, I enjoy my
                            pets and drinking coffee without
                            sugar.</p></div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe