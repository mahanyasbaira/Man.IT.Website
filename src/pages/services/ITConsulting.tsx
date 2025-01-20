import React, { useEffect } from 'react';
import { Building2 } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function ITConsultingPage() {
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
          <Building2 className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">IT Consulting</h1>
        </div>

        <div className="space-y-8">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Technology Assessment",
                  description: "Evaluating your current IT infrastructure and recommending improvements."
                },
                {
                  title: "Digital Transformation",
                  description: "Guiding your business through technological change and modernization."
                },
                {
                  title: "Security Consulting",
                  description: "Ensuring your systems are protected against cyber threats."
                },
                {
                  title: "Cloud Strategy",
                  description: "Developing and implementing cloud migration strategies."
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
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">Areas of Expertise</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <ul className="list-disc list-inside text-white space-y-2">
                <li>IT Infrastructure Planning</li>
                <li>Cloud Computing Solutions</li>
                <li>Cybersecurity Strategy</li>
                <li>Business Process Optimization</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}