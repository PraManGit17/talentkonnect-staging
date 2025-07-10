import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from '../components/logo';

function PostGig() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const bounty = 1; // Fixed bounty

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length > 60 || description.length > 200) {
      toast.error('Character limit exceeded!');
      return;
    }

    try {
      // Get existing gigs
      const gigs = JSON.parse(localStorage.getItem('gigs')) || [];

      // Add new gig
      const newGig = { title, description, category, bounty, id: Date.now() };
      localStorage.setItem('gigs', JSON.stringify([...gigs, newGig]));

      // Update credits
      const currentCredits = parseInt(localStorage.getItem('credits') || '0', 10);
      localStorage.setItem('credits', currentCredits + 1);

      toast.success('Gig posted! +1 Credit');

      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className='bg-green-100/30 h-screen flex flex-col gap-10 '>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <Logo size="default" />
        </div>
      </header>

      <div className="p-6 max-w-lg mx-auto bg-white rounded shadow w-full">
        <h1 className="text-2xl font-bold mb-4 text-blue-900">Post a Micro-Gig</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title (max 60 chars)</label>
            <input
              type="text"
              value={title}
              maxLength={60}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
            <p className="text-sm text-gray-500">{title.length}/60</p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Description (max 200 chars)</label>
            <textarea
              value={description}
              maxLength={200}
              required
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            ></textarea>
            <p className="text-sm text-gray-500">{description.length}/200</p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              type="text"
              value={category}
              required
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>

          <div className="text-sm text-gray-700 font-semibold">Bounty: $1 (fixed)</div>

          <button
            type="submit"
            className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            Post Gig
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
}

export default PostGig;
