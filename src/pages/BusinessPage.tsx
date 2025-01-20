import React, { useEffect } from 'react';
import AOS from 'aos';
import { Building2, ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageLayout } from '../components/PageLayout';

export function BusinessPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const benefits = [
    {
      title: "Affordable Expertise",
      description: "Professional IT solutions at a fraction of the cost of traditional agencies or full-time hires."
    },
    {
      title: "Tailored, Scalable Solutions",
      description: "Customized solutions aligned with your specific business needs and vision."
    },
    {
      title: "Seamless Technology Integration",
      description: "Expert guidance in integrating modern technology into your business operations."
    },
    {
      title: "Zero Upfront Costs",
      description: "Start collaborating with talented students without any initial financial investment."
    }
  ];

  const process = [
    {
      title: "Define Your Needs",
      description: "Share your business challenges and goals on our platform. The more specific you are, the better we can match you with the right student."
    },
    {
      title: "Get Matched",
      description: "Our advanced algorithm connects you with students who have the skills, expertise, and enthusiasm to tackle your project."
    },
    {
      title: "Collaborate and Achieve",
      description: "Work directly with students on short-term tasks or long-term projects, benefiting from their fresh perspectives and innovative ideas."
    },
    {
      title: "Provide Feedback",
      description: "Your input helps students refine their skills while ensuring high-quality outcomes for your business."
    }
  ];

  const services = [
    {
      title: "Web Development",
      items: [
        "Front-End Development",
        "Back-End Development",
        "CMS Solutions",
        "E-Commerce Solutions",
        "SEO Optimization",
        "Maintenance and Support"
      ]
    },
    {
      title: "Digital Marketing",
      items: [
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Pay-Per-Click (PPC)",
        "Email Marketing Campaigns",
        "Content Marketing",
        "Analytics and Reporting"
      ]
    },
    {
      title: "IT Support",
      items: [
        "Help Desk Support",
        "Network Setup and Maintenance",
        "Cloud Solutions",
        "Security Implementation",
        "System Administration"
      ]
    },
    {
      title: "Data Analysis",
      items: [
        "Data Cleaning and Preparation",
        "Data Visualization",
        "Predictive Analytics",
        "Market Research",
        "Business Intelligence"
      ]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl font-bold text-brand-gold mb-6"
            data-aos="fade-up"
          >
            Unlock Affordable, Tailored IT Solutions
          </h1>
          <p 
            className="text-xl text-white mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Transform your business with innovative solutions powered by talented students
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfekn9mJS7JxBuUt5lwMqvhf8BmbuJI1YQi8tiI5jDJi7E9LQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-3 rounded-full font-semibold hover:bg-brand-gold-light transition-colors"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-brand-black-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold text-brand-gold text-center mb-12"
            data-aos="fade-up"
          >
            Why Partner with MAN.I.T.LLC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-brand-black p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-brand-gold mb-3">{benefit.title}</h3>
                <p className="text-white">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold text-brand-gold text-center mb-12"
            data-aos="fade-up"
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div 
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 bg-brand-gold text-brand-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-brand-gold mb-3">{step.title}</h3>
                <p className="text-white">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-brand-black-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="text-3xl font-bold text-brand-gold text-center mb-12"
            data-aos="fade-up"
          >
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-brand-black p-6 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-semibold text-brand-gold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-white">
                      <Check className="w-5 h-5 text-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 
            className="text-3xl font-bold text-brand-gold mb-6"
            data-aos="fade-up"
          >
            Ready to Transform Your Business?
          </h2>
          <p 
            className="text-xl text-white mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join our community of innovative businesses and start working with talented students today.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfekn9mJS7JxBuUt5lwMqvhf8BmbuJI1YQi8tiI5jDJi7E9LQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-black px-8 py-3 rounded-full font-semibold hover:bg-brand-gold-light transition-colors"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Apply Now <Building2 className="w-5 h-5" />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}