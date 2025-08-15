import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { ContactForm } from '../components/forms/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact — FabrikTakt"
        description="Get in touch for AI/ML, Computer Vision, Data, Cloud/DevOps, ERP integration, or custom applications."
        canonical="https://fabriktakt.com/contact"
      />
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tell us about your project. Whether it's AI/ML, Computer Vision, Data & Analytics, 
              Cloud & DevOps, ERP integration, or custom applications—we'll get back to you shortly.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm 
              title="Get Started"
              description="Ready to turn chaos into clarity? Let's discuss your needs."
              className="bg-slate-800/60 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
