import React from 'react';

import { Link } from 'react-router-dom';
import { OnboardingForm } from '../components/OnboardingForm';
import { Logo } from '../components/logo';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <Logo size="default" />
        </div>
      </header>

      <main className="flex-grow py-12 bg-green-100/40">
        <div className="max-w-4xl mx-auto px-4">
          <OnboardingForm />
        </div>
      </main>

      <footer className="py-6 bg-green-100/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            Want to see your credits?{' '}
            <Link to="/dashboard" className="text-orange-500 hover:underline">
              Go to Dashboard
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
