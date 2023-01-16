import React from 'react';
import Layout from './components/Layout';
import Me from './pages/Me';
import AboutMe from './pages/AboutMe';
import Experience from './pages/Experience';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import './styles/pages/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout className='App'>
        <Routes>
          <Route path='/' element={<Me />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact-me' element={<ContactMe />} />
        </Routes >
      </Layout>
    </BrowserRouter>

  );
}

export default App;
