import React from 'react';
import { COMPANY_NAME, CONTACT_DETAILS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-slate-800 pb-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{COMPANY_NAME}</h3>
            <p className="max-w-md text-slate-400">
              Innovating the future, one project at a time. Contact us to start your journey.
            </p>
          </div>
          <div className="flex flex-col md:items-end space-y-2">
            <a href={`tel:${CONTACT_DETAILS.phone}`} className="hover:text-white transition-colors">
              {CONTACT_DETAILS.phone}
            </a>
            <a href={`mailto:${CONTACT_DETAILS.email}`} className="hover:text-white transition-colors">
              {CONTACT_DETAILS.email}
            </a>
          </div>
        </div>
        
        <div className="pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;