import React, { useEffect } from 'react';
import { PenTool } from 'lucide-react';
import AOS from 'aos';
import { PageLayout } from '../../components/PageLayout';

export function BrandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Brand Strategy Development",
      description: "Defining brand values, voice, and positioning."
    },
    {
      title: "Content Writing",
      description: "High-quality blogs, articles, and copywriting for websites and marketing."
    },
    {
      title: "Social Media Content",
      description: "Posts, captions, and strategies to engage audiences."
    },
    {
      title: "Video Content Creation",
      description: "Producing promotional and educational videos using Adobe Premiere Pro."
    }
  ];

  const tools = [
    "Adobe Creative Suite",
    "Content Management Systems",
    "Social Media Platforms",
    "Video Editing Software",
    "Analytics Tools",
    "Project Management Tools"
  ];

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <PenTool className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-brand-gold mb-4" data-aos="fade-up">Branding and Content Creation</h1>
          <p className="text-xl text-white" data-aos="fade-up" data-aos-delay="200">
            Building brands that resonate with their target audiences.
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
            <h2 className="text-2xl font-semibold text-brand-gold mb-6">Tools We Use</h2>
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