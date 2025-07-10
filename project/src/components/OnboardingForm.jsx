import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkle } from 'lucide-react';

export function OnboardingForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: '',
    tip: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Submitting form data:', formData);

      const userId = `user_${Date.now()}`;
      const user = { id: userId, ...formData };

      const existingUsers = JSON.parse(localStorage.getItem('tk_users') || '[]');
      localStorage.setItem('tk_users', JSON.stringify([...existingUsers, user]));

      const creditData = {
        userId,
        source: 'Tip',
        amount: 1,
        timestamp: new Date().toISOString(),
      };

      const existingCredits = JSON.parse(localStorage.getItem('tk_credits') || '[]');
      localStorage.setItem('tk_credits', JSON.stringify([...existingCredits, creditData]));

      console.log('Simulated credit granted successfully:', creditData);

      setShowSuccess(true);
      setTimeout(() => navigate('/dashboard'), 10000);
    } catch (err) {
      console.error('Form error:', err);
      setError(err.message || 'Unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };


  const categories = [
    'Cooking Hack',
    'Study Tip',
    'Repair Trick',
    'Life Hack',
    'Tech Tip',
    'Career Advice',
    'DIY Project',
    'Other',
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {showSuccess ? (
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-md">
          <div className="flex items-center justify-center bg-orange-500 text-white rounded-full w-20 h-20 mb-4">
              <Sparkle className="h-10 w-10" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-center text-gray-900">
            +1 Credit!
          </h3>
          <p className="text-center mb-6 text-gray-600">
            Thank you for sharing your talent!
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-950 hover:bg-blue-900 text-white px-4 py-2 rounded"
            >
              View Dashboard
            </button>
            <button
              onClick={() => window.location.reload()}
              className="border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50"
            >
              Share Another Tip
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 bg-white rounded-xl shadow-md"
        >
          <h2 className="text-2xl leading-relaxed max-w-2xl font-bold text-center text-blue-950 mb-6">
            Share Your Talent
          </h2>

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              <p className="font-semibold">Error:</p>
              <p>{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium ">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block font-medium text-sm">
              WhatsApp/Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category" className="block font-medium text-sm">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleSelectChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="tip" className="block font-medium text-sm">
              Your Tip
            </label>
            <input
              id="tip"
              name="tip"
              value={formData.tip}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Share your helpful tip"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
          >
            {isSubmitting ? 'Submitting...' : 'Submit & Earn Credit'}
          </button>
        </form>
      )}
    </div>
  );
}
