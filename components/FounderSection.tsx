import React from 'react';
import { FOUNDER_DETAILS, CONTACT_DETAILS } from '../constants';

const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet The Founder</h2>
          <div className="w-16 h-1 bg-dexaz-primary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden md:flex">
          {/* Image Side */}
          <div className="md:w-1/2 bg-slate-200 relative h-96 md:h-auto">
             {/* 
                NOTE: Use the provided founder image here. 
                Using a placeholder with object-cover to simulate the professional shot.
             */}
            <img 
              src={FOUNDER_DETAILS.imageUrl} 
              alt={FOUNDER_DETAILS.name} 
              className="w-full h-full object-cover object-top"
            />
             {/* Overlay gradient for text readability if needed, though clean is better */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden"></div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm text-dexaz-primary font-bold mb-1">
              Visionary Leader
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">{FOUNDER_DETAILS.name}</h3>
            <p className="text-lg text-slate-500 mb-8">{FOUNDER_DETAILS.role}</p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-dexaz-primary group-hover:bg-dexaz-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Call</p>
                  <p className="text-lg font-semibold text-slate-900">{CONTACT_DETAILS.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-dexaz-primary group-hover:bg-dexaz-primary group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium text-slate-500">Email</p>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-lg font-semibold text-slate-900 truncate block hover:text-dexaz-primary">
                    {CONTACT_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;