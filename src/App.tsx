import React from 'react';
import Layout from './components/Layout';
import Me from './pages/Me';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import './styles/pages/App.css'
import { Element } from 'react-scroll'

function App() {
  return (
    <Layout className='App'>
      <Element name=""><Me /></Element>
      <Element name="about-me"><AboutMe /></Element>
      <Element name="experience"><Experience /></Element>
      <Element name="portfolio"><Portfolio /></Element>
      <Element name="contact-me"><ContactMe /></Element>
    </Layout>

  );
}

export default App;
