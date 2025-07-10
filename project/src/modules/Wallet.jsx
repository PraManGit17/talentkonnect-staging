import React, { useEffect, useState } from 'react';
import { Logo } from '../components/logo';

const ITEMS_PER_PAGE = 5;

const Wallet = () => {
  const [credits, setCredits] = useState(0);
  const [ledger, setLedger] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const creditData = JSON.parse(localStorage.getItem('tk_credits') || '[]');
    const userData = JSON.parse(localStorage.getItem('tk_users') || '[]');

    const sortedCredits = creditData.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );

    const totalCredits = sortedCredits.reduce((sum, entry) => {
      return entry.amount > 0 ? sum + entry.amount : sum;
    }, 0);

    // Map userId to category for lookup
    const categoryMap = {};
    userData.forEach(user => {
      categoryMap[user.id] = user.category;
    });

    const enrichedLedger = sortedCredits.map(entry => ({
      ...entry,
      category: categoryMap[entry.userId] || entry.source, // fallback to "Tip"
    }));

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginated = enrichedLedger.slice(startIndex, endIndex);

    setCredits(totalCredits);
    setLedger(paginated);
    setLoading(false);
  }, [page]);

  const totalEntries = JSON.parse(localStorage.getItem('tk_credits') || '[]').length;
  const totalPages = Math.ceil(totalEntries / ITEMS_PER_PAGE);

  return (

    <div className='bg-green-100/30 h-screen'>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <Logo size="default" />
        </div>
      </header>

      <div className="max-w-3xl mx-auto p-6 mt-6 rounded-xl shadow-md bg-white flex flex-col gap-10">

        <div className='text-center text-blue-950 text-3xl font-bold'>Credit Wallet</div>
        <div className="m">
          <h2 className="text-2xl font-bold text-center">
            You have <span className="text-orange-500">{credits}</span> credits
          </h2>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Credit History</h3>
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : ledger.length === 0 ? (
            <p className="text-gray-500">No transactions yet.</p>
          ) : (
            <>
              <table className="w-full border border-gray-200 mb-4">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 text-left">
                    <th className="p-3 border-b">Date</th>
                    <th className="p-3 border-b">Source</th>
                    <th className="p-3 border-b">Credits</th>
                  </tr>
                </thead>
                <tbody>
                  {ledger.map((entry, idx) => (
                    <tr key={idx} className="text-gray-800 border-b hover:bg-gray-50">
                      <td className="p-3">
                        {new Date(entry.timestamp).toLocaleDateString()}
                      </td>
                      <td className="p-3">{entry.category}</td>
                      <td className="p-3 text-blue-950 font-semibold">+{entry.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setPage((prev) => prev - 1)}
                  disabled={page === 1}
                  className="px-3 py-1 border rounded bg-gray-200 text-gray-900 hover:bg-gray-200 disabled:opacity-50"
                >
                  Prev
                </button>
                <span className="text-sm text-gray-600">
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((prev) => prev + 1)}
                  disabled={page === totalPages}
                  className="px-3 py-1 border rounded bg-blue-950 text-gray-50 hover:bg-gray-200 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>

  );
};

export default Wallet;
