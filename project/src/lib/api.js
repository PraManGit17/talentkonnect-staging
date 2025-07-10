// src/utils/api.js

export const fetchBalance = () => {
  const entries = JSON.parse(localStorage.getItem('tk_credits') || '[]');
  const total = entries.reduce((sum, e) => sum + parseInt(e.amount), 0);
  return new Promise((resolve) => {
    setTimeout(() => resolve({ credits: total }), 500);
  });
};

export const fetchLedger = (page = 1) => {
  const itemsPerPage = 5;
  const entries = JSON.parse(localStorage.getItem('tk_credits') || '[]');

  // Reverse to show latest first
  const sorted = entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

  const paginated = sorted.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  // Map to standard structure
  const finalEntries = paginated.map((entry, i) => ({
    id: i + 1 + (page - 1) * itemsPerPage,
    date: new Date(entry.timestamp).toLocaleDateString(),
    source: entry.source,
    credits: `+${entry.amount}`,
  }));

  return new Promise((resolve) => {
    setTimeout(() => resolve({ entries: finalEntries, total: entries.length }), 500);
  });
};
