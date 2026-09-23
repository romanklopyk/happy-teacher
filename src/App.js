import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Experience from './pages/Experience';
import DigitalResources from './pages/Methodical/DigitalResources';
import Communities from './pages/Methodical/Communities';
import Certificates from './pages/Growth/Certificates';
import Competitions from './pages/Students/Competitions';
import Projects from './pages/Students/Projects';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        
        {/* Methodical */}
        <Route path="/methodical/digital-developments" element={<DigitalResources />} />
        {/*<Route path="/methodical/projects" element={<PagePlaceholder title="Участь у проєктах та експериментальній роботі" />} />*/}
        <Route path="/methodical/communities" element={<Communities />} />
        
        {/* Students */}
        <Route path="/students/competitions" element={<Competitions />} />
        <Route path="/students/projects" element={<Projects />} />
        
        {/* Growth */}
        <Route path="/growth/certificates" element={<Certificates />} />
      </Routes>
    </Layout>
  );
}

export default App;
