import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Logo } from '../components/logo';

function CompleteGig() {
  const [gigs, setGigs] = useState([]);
  const [acceptedGig, setAcceptedGig] = useState(null);
  const [comment, setComment] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const storedGigs = JSON.parse(localStorage.getItem('gigs')) || [];
    setGigs(storedGigs);
  }, []);

  const handleAccept = (gig) => {
    setAcceptedGig(gig);
    toast.success('Gig accepted!');
  };

  const handleComplete = (e) => {
    e.preventDefault();

    if (!file) {
      toast.error('Please upload a file');
      return;
    }

    // Simulate gig completion
    const currentCredits = parseInt(localStorage.getItem('credits') || '0', 10);
    localStorage.setItem('credits', currentCredits + 1);

    toast.success('Gig completed! +1 Credit');

    setTimeout(() => {
      window.location.href = '/wallet';
    }, 2000);
  };

  return (
    <div className='h-screen bg-green-100/30 flex flex-col gap-10'>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <Logo size="default" />
        </div>
      </header>

      <div className="p-6 w-[40%] mx-auto">
        <ToastContainer position="top-right" autoClose={2000} />
        <h1 className="text-2xl font-bold text-blue-900 mb-4">
          Micro-Task Matching & Completion
        </h1>

        {!acceptedGig ? (
          gigs.length > 0 ? (
            <div className="space-y-4">
              {gigs.map((gig) => (
                <div
                  key={gig.id}
                  className="bg-white p-4 rounded shadow border border-gray-200"
                >
                  <h2 className="font-semibold text-lg">{gig.title}</h2>
                  <p className="text-sm text-gray-700 mb-2">
                    {gig.description?.slice(0, 100)}...
                  </p>
                  <p className="text-sm mb-2 text-blue-900 font-semibold">
                    Bounty: ${gig.bounty}
                  </p>
                  <button
                    className="px-4 py-2 rounded bg-orange-600 text-white hover:bg-orange-700 transition"
                    onClick={() => handleAccept(gig)}
                  >
                    Accept
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No open gigs available.</p>
          )
        ) : (
          <form
            onSubmit={handleComplete}
            className="bg-white p-6 rounded shadow space-y-4"
          >
            <h2 className="text-xl font-semibold mb-2 text-blue-900">
              Completing: {acceptedGig.title}
            </h2>

            <div>
              <label className="block mb-1 font-medium">
                Upload Proof (image/video/doc)
              </label>
              <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                required
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Comment</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
            >
              Submit Gig
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default CompleteGig;
