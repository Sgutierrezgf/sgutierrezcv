import React from 'react';
import Layout from './components/Layout';
import Me from './pages/Me';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import './styles/pages/App.css'

function App() {
  return (
    <Layout className='App'>
      <Me />
      <AboutMe />
      <Experience />
      <Portfolio />
      <ContactMe />
    </Layout>
  );
}

export default App;
