import React, { useEffect } from 'react';
import { Shield } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function CybersecurityPage() {
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
          <Shield className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">Cybersecurity</h1>
        </div>

        <div className="space-y-8">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Security Assessment",
                  description: "Comprehensive evaluation of your security posture"
                },
                {
                  title: "Threat Detection",
                  description: "Advanced monitoring and threat detection systems"
                },
                {
                  title: "Incident Response",
                  description: "Rapid response to security incidents and breaches"
                },
                {
                  title: "Security Training",
                  description: "Employee security awareness and training programs"
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
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">Security Solutions</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <ul className="list-disc list-inside text-white space-y-2">
                <li>Firewall Configuration</li>
                <li>Endpoint Protection</li>
                <li>Network Security</li>
                <li>Data Encryption</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}