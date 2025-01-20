import React, { useEffect } from 'react';
import { Code } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function WebDevelopmentPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Front-End Development",
      description: "Using HTML, CSS, JavaScript, and frameworks like React or Angular for visually appealing and interactive designs."
    },
    {
      title: "Back-End Development",
      description: "Expertise in Node.js, Python (Django, Flask), Ruby on Rails, and PHP (Hypertext Preprocessor) for robust server-side solutions."
    },
    {
      title: "Content Management Systems (CMS)",
      description: "Setting up and customizing platforms like WordPress, Shopify, and Wix for businesses that need manageable solutions."
    },
    {
      title: "E-Commerce Solutions",
      description: "Developing platforms integrated with payment gateways like Stripe, PayPal, and Square."
    },
    {
      title: "SEO Optimization",
      description: "Ensuring websites are search engine-friendly by implementing metadata, structured data, and mobile-first designs."
    },
    {
      title: "Maintenance and Support",
      description: "Regular updates, security patches, and performance optimization."
    }
  ];

  const techStack = [
    "React",
    "Vue.js",
    "MongoDB",
    "MySQL",
    "AWS",
    "Google Firebase"
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Code className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">Web Development Services</h1>
          <p className="text-xl text-white" data-aos="fade-up" data-aos-delay="200">
            Our web development services cater to businesses looking for modern, responsive, and user-friendly websites.
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
            <h2 className="text-2xl font-semibold text-brand-gold mb-6">Tech Stack</h2>
            <div className="bg-brand-black-light p-6 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="text-white flex items-center gap-2"
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                  >
                    <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
                    {tech}
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