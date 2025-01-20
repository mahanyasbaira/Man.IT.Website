import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Users, 
  Building2, 
  ArrowRight, 
  Rocket, 
  BookOpen, 
  BarChart, 
  MessageSquare,
  GraduationCap,
  Briefcase,
  Code,
  PenTool,
  Database,
  LineChart,
  FileText,
  DollarSign,
  Target,
  Smartphone
} from 'lucide-react';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';
import { StudentsPage } from './pages/StudentsPage';
import { BusinessPage } from './pages/BusinessPage';
import { WebDevelopmentPage } from './pages/services/WebDevelopment';
import { DigitalMarketingPage } from './pages/services/DigitalMarketing';
import { GraphicDesignPage } from './pages/services/GraphicDesign';
import { DataAnalysisPage } from './pages/services/DataAnalysis';
import { ITSupportPage } from './pages/services/ITSupport';
import { MobileAppPage } from './pages/services/MobileApp';
import { SoftwareTestingPage } from './pages/services/SoftwareTesting';
import { BrandingPage } from './pages/services/Branding';
import { BusinessPlanPage } from './pages/services/BusinessPlan';
import { FinancePage } from './pages/services/Finance';
import { MarketingAdvertisementPage } from './pages/services/MarketingAdvertisement';
import { LOGO_URL } from './constants';

function App() {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 text-brand-gold" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      page: "web-development"
    },
    {
      icon: <Rocket className="w-8 h-8 text-brand-gold" />,
      title: "Digital Marketing",
      description: "Strategic digital marketing solutions for online growth",
      page: "digital-marketing"
    },
    {
      icon: <PenTool className="w-8 h-8 text-brand-gold" />,
      title: "Graphic Design",
      description: "Visually stunning designs that communicate your brand's message",
      page: "graphic-design"
    },
    {
      icon: <Database className="w-8 h-8 text-brand-gold" />,
      title: "Data Analysis",
      description: "Data-driven insights to improve business performance",
      page: "data-analysis"
    },
    {
      icon: <Building2 className="w-8 h-8 text-brand-gold" />,
      title: "IT Support",
      description: "Reliable solutions for seamless technology operations",
      page: "it-support"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-gold" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      page: "mobile-app"
    },
    {
      icon: <BarChart className="w-8 h-8 text-brand-gold" />,
      title: "Software Testing",
      description: "Ensuring reliability and performance through rigorous testing",
      page: "software-testing"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-brand-gold" />,
      title: "Branding & Content Creation",
      description: "Building brands that resonate with target audiences",
      page: "branding"
    },
    {
      icon: <FileText className="w-8 h-8 text-brand-gold" />,
      title: "Business Plans",
      description: "Actionable strategies for startups and small businesses",
      page: "business-plan"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand-gold" />,
      title: "Finance",
      description: "Financial solutions for better decision-making",
      page: "finance"
    },
    {
      icon: <Target className="w-8 h-8 text-brand-gold" />,
      title: "Marketing & Advertisement",
      description: "Strategies to boost brand visibility and drive sales",
      page: "marketing-advertisement"
    }
  ];

  const HomePage = () => {
    return (
      <>
        {/* Hero Section */}
        <header className="relative bg-brand-black text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-black to-brand-black-light opacity-90"></div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-12">
                <img 
                  src={LOGO_URL}
                  alt="MAN.I.T.LLC Logo" 
                  className="h-32 w-auto"
                />
              </div>
              <h1 
                className="text-4xl md:text-6xl font-bold tracking-tight text-brand-gold hover:text-brand-gold-light transition-colors"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Empowering Students and Small Businesses Through Technology and Collaboration
              </h1>
              <p 
                className="mt-6 text-xl max-w-3xl mx-auto text-white hover:text-gray-200 transition-colors"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Connecting skilled students with small businesses to foster innovation, drive growth, and create meaningful opportunities.
              </p>
              <div 
                className="mt-10 flex justify-center gap-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a 
                  href="/students"
                  className="bg-brand-gold text-brand-black px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-gold-light transition-colors"
                >
                  For Students <GraduationCap className="w-5 h-5" />
                </a>
                <a 
                  href="/business"
                  className="border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-black-light transition-colors"
                >
                  For Businesses <Briefcase className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* How It Works Section */}
        <section className="py-20 bg-brand-black-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-brand-gold hover:text-brand-gold-light transition-colors">How It Works</h2>
              <p className="mt-4 text-lg text-white hover:text-gray-200 transition-colors">Simple steps to start collaborating</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-8 h-8 text-brand-gold" />,
                  title: "Match",
                  description: "Connect with the perfect partner based on skills and needs"
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-brand-gold" />,
                  title: "Collaborate",
                  description: "Work together on innovative solutions"
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-brand-gold" />,
                  title: "Support & Resources",
                  description: "Access tools and guidance throughout the project"
                },
                {
                  icon: <BarChart className="w-8 h-8 text-brand-gold" />,
                  title: "Feedback",
                  description: "Share experiences and grow together"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center hover:transform hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 * index}
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-gold hover:text-brand-gold-light transition-colors">{step.title}</h3>
                  <p className="mt-2 text-white hover:text-gray-200 transition-colors">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-brand-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center" data-aos="fade-up">
              <h2 className="text-3xl font-bold text-brand-gold hover:text-brand-gold-light transition-colors">Our Services</h2>
              <p className="mt-4 text-lg text-white hover:text-gray-200 transition-colors">Comprehensive solutions for your business needs</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-brand-black-light p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 border border-brand-gold/20"
                  data-aos="fade-up"
                  data-aos-delay={200 * index}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-gold hover:text-brand-gold-light transition-colors">{service.title}</h3>
                  <p className="mt-2 text-white hover:text-gray-200 transition-colors">{service.description}</p>
                  <Link 
                    to={`/services/${service.page}`}
                    className="mt-4 text-brand-gold font-medium flex items-center gap-1 hover:text-brand-gold-light transition-colors"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-brand-black-light text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold text-brand-gold hover:text-brand-gold-light transition-colors"
              data-aos="fade-up"
            >
              Ready to Get Started?
            </h2>
            <p 
              className="mt-4 text-lg hover:text-gray-200 transition-colors"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join our community of innovators and problem-solvers
            </p>
            <div 
              className="mt-10 flex justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe95IYwobeJ3I-DtM7n51ZTvoOEq-33MLLT4nnMwMJWbCtZIA/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-gold text-brand-black px-8 py-3 rounded-full font-semibold hover:bg-brand-gold-light transition-colors"
              >
                Register as Student
              </a>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfekn9mJS7JxBuUt5lwMqvhf8BmbuJI1YQi8tiI5jDJi7E9LQ/viewform?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-brand-gold text-brand-gold px-8 py-3 rounded-full font-semibold hover:bg-brand-black-light transition-colors"
              >
                Register as Business
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-brand-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/business" element={<BusinessPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
          <Route path="/services/data-analysis" element={<DataAnalysisPage />} />
          <Route path="/services/it-support" element={<ITSupportPage />} />
          <Route path="/services/mobile-app" element={<MobileAppPage />} />
          <Route path="/services/software-testing" element={<SoftwareTestingPage />} />
          <Route path="/services/branding" element={<BrandingPage />} />
          <Route path="/services/business-plan" element={<BusinessPlanPage />} />
          <Route path="/services/finance" element={<FinancePage />} />
          <Route path="/services/marketing-advertisement" element={<MarketingAdvertisementPage />} />
        </Routes>
        <RegistrationModal 
          isOpen={isRegistrationOpen}
          onClose={() => setIsRegistrationOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;