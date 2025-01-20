import React, { useEffect } from 'react';
import { Rocket } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function DigitalMarketingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Social Media Marketing",
      description: "Leveraging platforms like Facebook, Instagram, Twitter, and LinkedIn to create campaigns tailored to target demographics."
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Employing keyword research, backlink strategies, and on-page SEO to increase search rankings."
    },
    {
      title: "Pay-Per-Click (PPC)",
      description: "Running ads on Google Ads, Bing Ads, and social platforms to drive traffic and generate leads."
    },
    {
      title: "Email Marketing Campaigns",
      description: "Crafting automated workflows using Mailchimp, HubSpot, or Constant Contact."
    },
    {
      title: "Content Marketing",
      description: "Blogs, articles, and infographics designed to engage and inform audiences."
    },
    {
      title: "Analytics and Reporting",
      description: "Using Google Analytics, SEMrush, and Ahrefs to track and optimize campaigns."
    }
  ];

  const tools = [
    "Google Analytics",
    "SEMrush",
    "Mailchimp",
    "HubSpot",
    "Ahrefs",
    "Social Media Management Tools"
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Rocket className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">Digital Marketing Services</h1>
          <p className="text-xl text-white" data-aos="fade-up" data-aos-delay="200">
            We help businesses enhance their online presence and grow their audience through strategic campaigns.
          </p>
        </div>

        <div className="space-y-12">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-brand-black-light p-6 rounded-lg"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <h3 className="text-xl font-semibold text-brand-gold mb-2">{service.title}</h3>
                  <p className="text-white">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section data-aos="fade-up">
            <h2 className="text-2xl font-semibold text-brand-gold mb-6">Marketing Tools</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index}
                    className="text-white flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}