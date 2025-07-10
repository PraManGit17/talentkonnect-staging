import React from 'react';
import { Logo } from '../components/logo';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-12 py-4 flex justify-between items-center">
          <Logo size="default" />
          <nav className="hidden md:flex space-x-6 font-semibold">
            <Link to="/" className="text-gray-800 hover:text-orange-500 transition-colors">Home</Link>
            <Link to="/dashboard" className="text-gray-800 hover:text-orange-500 transition-colors">Dashboard</Link>
            <Link to="#" className="text-gray-800 hover:text-orange-500 transition-colors">About</Link>
            <Link to="/wallet" className="text-gray-800 hover:text-orange-500 transition-colors">Wallet</Link>
          </nav>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            <Link to="/onboarding">Get Started</Link>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-green-100/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl md:text-6xl font-bold uppercase text-blue-950">SHARE YOUR SKILLS</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700">
              Join TalentKonnect to share your expertise, earn credits, and
              connect with talented individuals.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg"
            >
              <Link to="/onboarding">Get Started</Link>
            </Button>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-center mb-12 text-3xl font-bold text-blue-950">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Share Your Tip", desc: "Share your expertise in cooking, studying, repairs, or other skills." },
                { step: "2", title: "Earn Credits", desc: "Get rewarded with credits for your valuable contributions." },
                { step: "3", title: "Connect & Grow", desc: "Use your credits to connect with other talented individuals." }
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-green-50 p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center mb-4 mx-auto font-bold">
                    {step}
                  </div>
                  <h3 className="text-center mb-3 font-semibold text-lg text-gray-800">{title}</h3>
                  <p className="text-center text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Logo size="small" variant="dark" />
            <div className="mt-4 md:mt-0">
              <p className="text-sm text-gray-200">
                © {new Date().getFullYear()} TalentKonnect. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
