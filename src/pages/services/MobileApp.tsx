import React, { useEffect } from 'react';
import { Smartphone } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function MobileAppPage() {
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
          <Smartphone className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">Mobile App Development</h1>
        </div>

        <div className="space-y-8">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "iOS Development",
                  description: "Native iOS applications for iPhone and iPad"
                },
                {
                  title: "Android Development",
                  description: "Native Android applications for all devices"
                },
                {
                  title: "Cross-Platform",
                  description: "Efficient development for multiple platforms"
                },
                {
                  title: "App Maintenance",
                  description: "Ongoing support and updates for your applications"
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
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">Technologies</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <ul className="list-disc list-inside text-white space-y-2">
                <li>React Native</li>
                <li>Flutter</li>
                <li>Swift</li>
                <li>Kotlin</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}