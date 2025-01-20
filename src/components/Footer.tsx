import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4 hover:text-brand-gold-light transition-colors">
              About Us
            </h3>
            <p className="text-sm hover:text-gray-200 transition-colors">
              MAN.I.T.LLC bridges the gap between talented students and growing businesses, 
              creating opportunities for both to thrive in the digital age.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4 hover:text-brand-gold-light transition-colors">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gray-200 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/students" className="text-sm hover:text-gray-200 transition-colors">For Students</Link>
              </li>
              <li>
                <Link to="/business" className="text-sm hover:text-gray-200 transition-colors">For Business</Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4 hover:text-brand-gold-light transition-colors">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/web-development" className="text-sm hover:text-gray-200 transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="text-sm hover:text-gray-200 transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/data-analysis" className="text-sm hover:text-gray-200 transition-colors">
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link to="/services/it-support" className="text-sm hover:text-gray-200 transition-colors">
                  IT Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-brand-gold mb-4 hover:text-brand-gold-light transition-colors">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <Mail className="w-4 h-4 text-brand-gold" />
                <a href="mailto:info@manit.com" className="text-sm">info@manit.com</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <Phone className="w-4 h-4 text-brand-gold" />
                <a href="tel:+17193600794" className="text-sm">+1 719 360 0794</a>
              </li>
              <li className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span className="text-sm">Fort Collins, Colorado, USA</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/man-i-t-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-brand-gold-light transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/man.i.t.llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-brand-gold-light transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            © {new Date().getFullYear()} MAN.I.T.LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}