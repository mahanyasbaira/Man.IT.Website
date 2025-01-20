import React, { useEffect } from 'react';
import AOS from 'aos';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_URL } from '../constants';

export function StudentsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-black">
      {/* Header with animated logo */}
      <header className="relative bg-brand-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-brand-gold hover:text-brand-gold-light transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <img 
              src={LOGO_URL}
              alt="MAN.I.T.LLC Logo"
              className="h-20 w-auto animate-breathe"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 
            className="text-4xl font-bold text-brand-gold text-center mb-8 hover:text-brand-gold-light transition-colors"
            data-aos="fade-up"
          >
            For Students
          </h1>

          <div className="space-y-8 text-white">
            <section data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-semibold text-brand-gold mb-4 hover:text-brand-gold-light transition-colors">
                Empower Your Career with Real-World Experience
              </h2>
              <p className="text-lg leading-relaxed hover:text-gray-200 transition-colors">
                At MAN.I.T.LLC, we firmly believe that the best way to learn is by doing. We are not just a 
                platform; we are a movement committed to bridging the gap between classroom learning and 
                real-world application.
              </p>
            </section>

            {/* Why Join Section */}
            <section data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-2xl font-semibold text-brand-gold mb-6 hover:text-brand-gold-light transition-colors">
                Why Join MAN.I.T.LLC?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Real-World Opportunities to Prove Your Skills",
                    content: "Work on live projects that address real-world business challenges. Build an impressive portfolio that demonstrates your capabilities to future employers."
                  },
                  {
                    title: "Flexible Work Schedules",
                    content: "Take on projects that align with your availability, ensuring you can gain valuable experience without compromising your academic commitments."
                  },
                  {
                    title: "Mentorship and Professional Growth",
                    content: "Receive guidance from industry mentors who will help you refine your technical skills and navigate workplace challenges."
                  },
                  {
                    title: "Expand Your Network",
                    content: "Build connections with professionals in the industry, opening doors to potential internships and job opportunities."
                  },
                  {
                    title: "Build Confidence and Stand Out",
                    content: "See the impact of your work and set yourself apart as a proactive and capable professional."
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-brand-black-light p-6 rounded-lg hover:shadow-xl transition-all"
                    data-aos="fade-up"
                    data-aos-delay={200 * index}
                  >
                    <h3 className="text-xl font-semibold text-brand-gold mb-2 hover:text-brand-gold-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white hover:text-gray-200 transition-colors">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What We Offer Section */}
            <section data-aos="fade-up" data-aos-delay="400">
              <h2 className="text-2xl font-semibold text-brand-gold mb-6 hover:text-brand-gold-light transition-colors">
                What We Offer
              </h2>
              <ul className="list-disc list-inside space-y-3 text-white">
                <li className="hover:text-gray-200 transition-colors">Diverse Opportunities in web development, data analysis, graphic design, and digital marketing</li>
                <li className="hover:text-gray-200 transition-colors">Supportive Resources including training materials, webinars, and guides</li>
                <li className="hover:text-gray-200 transition-colors">Performance Feedback from businesses to refine your skills</li>
                <li className="hover:text-gray-200 transition-colors">Access to an Exclusive Job Board with tailored opportunities</li>
              </ul>
            </section>

            {/* CTA Section */}
            <section 
              className="text-center py-8"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <h2 className="text-2xl font-semibold text-brand-gold mb-4 hover:text-brand-gold-light transition-colors">
                Ready to Jumpstart Your Career?
              </h2>
              <p className="text-lg mb-6 hover:text-gray-200 transition-colors">
                Don't wait to turn your potential into professional expertise. Join a network of ambitious 
                students who are making a difference while earning real-world experience.
              </p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe95IYwobeJ3I-DtM7n51ZTvoOEq-33MLLT4nnMwMJWbCtZIA/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-3 rounded-full font-semibold hover:bg-brand-gold-light transition-colors"
              >
                Apply Now <GraduationCap className="w-5 h-5" />
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}