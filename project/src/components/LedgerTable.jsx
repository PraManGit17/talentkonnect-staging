
import React, { useEffect, useState } from 'react';
import { fetchLedger } from '../lib/api';

const LedgerTable = () => {
  const [entries, setEntries] = useState([]);
  const [page, setPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);
  const entriesPerPage = 5;

  useEffect(() => {
    fetchLedger(page).then(({ entries, total }) => {
      setEntries(entries);
      setTotalEntries(total);
    });
  }, [page]);

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Transaction Ledger</h3>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">#</th>
            <th className="text-left p-2">Date</th>
            <th className="text-left p-2">Source</th>
            <th className="text-left p-2">Credits</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id} className="border-t">
              <td className="p-2">{entry.id}</td>
              <td className="p-2">{entry.date}</td>
              <td className="p-2">{entry.source}</td>
              <td className="p-2 font-semibold text-green-600">{entry.credits}</td>
            </tr>
          ))}
          {entries.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4 text-gray-500">No entries found.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-2">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-2 text-sm">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LedgerTable;
