import React, { useEffect } from 'react';
import { LineChart } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function BusinessAnalyticsPage() {
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
          <LineChart className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">Business Analytics</h1>
        </div>

        <div className="space-y-8">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Data Visualization",
                  description: "Creating insightful dashboards and reports to visualize your business data."
                },
                {
                  title: "Predictive Analytics",
                  description: "Using advanced algorithms to forecast trends and make data-driven decisions."
                },
                {
                  title: "Market Research",
                  description: "Analyzing market trends and competitor data to identify opportunities."
                },
                {
                  title: "Performance Metrics",
                  description: "Setting up KPIs and tracking systems to measure business success."
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
            <h2 className="text-2xl font-semibold text-brand-gold mb-4">Tools We Use</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <ul className="list-disc list-inside text-white space-y-2">
                <li>Power BI for business intelligence</li>
                <li>Tableau for data visualization</li>
                <li>Python for data analysis</li>
                <li>Excel for financial modeling</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}