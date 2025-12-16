import React from 'react';
import { TAGLINE, STATS } from '../constants';
import ExcelButton from './ExcelButton';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-dexaz-primary text-sm font-semibold tracking-wide uppercase mb-4">
          Welcome to the Future
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
          We are <span className="text-transparent bg-clip-text bg-gradient-to-r from-dexaz-secondary to-dexaz-primary">DEXAZ Studios</span>
        </h1>
        <p className="text-xl text-slate-600 mb-8 font-light">
          {TAGLINE}
        </p>
        <p className="text-lg text-slate-600 leading-relaxed mb-10">
          DEXAZ Studios is a premier startup company focused on delivering creative, innovative, and development-based solutions. 
          We bridge the gap between imagination and reality through cutting-edge technology.
        </p>
        
        <div className="flex justify-center gap-4">
          <ExcelButton />
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors">
            Contact Us
          </a>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {STATS.map((stat, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
          >
            <div className="text-5xl font-bold text-dexaz-primary mb-2">
              {stat.value}
            </div>
            <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;