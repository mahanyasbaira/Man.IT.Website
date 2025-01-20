import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';

export function Header() {
  return (
    <header className="bg-brand-black text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end">
          <Link to="/">
            <img 
              src={LOGO_URL}
              alt="MAN.IT.L.L.C Logo"
              className="h-20 w-auto animate-breathe"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}