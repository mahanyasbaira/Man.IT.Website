import React, { useEffect } from 'react';
import { PenTool } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function UIUXDesignPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PenTool className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">UI/UX Design Services</h1>
        </div>

        <div className="space-y-8">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "User Interface Design",
                  description: "Creating visually appealing and intuitive interfaces that enhance user engagement."
                },
                {
                  title: "User Experience Design",
                  description: "Designing seamless user journeys and interactions that delight your customers."
                },
                {
                  title: "Prototyping",
                  description: "Building interactive prototypes to test and validate design concepts."
                },
                {
                  title: "Design Systems",
                  description: "Creating consistent and scalable design systems for your digital products."
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-brand-black-light p-6 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">{item.title}</h3>
                  <p className="text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">Our Design Tools</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <ul className="list-disc list-inside text-white space-y-2">
                <li>Figma for collaborative design</li>
                <li>Adobe XD for prototyping</li>
                <li>Sketch for interface design</li>
                <li>InVision for interactive prototypes</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}