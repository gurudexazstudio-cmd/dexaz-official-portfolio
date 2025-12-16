import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import FounderSection from './components/FounderSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <AboutSection />
        <FounderSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;