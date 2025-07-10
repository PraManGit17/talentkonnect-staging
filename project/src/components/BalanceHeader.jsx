
import React from 'react';

const BalanceHeader = ({ credits }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-xl shadow-lg mb-6">
      <h2 className="text-xl font-semibold">Your Total Balance</h2>
      <p className="text-4xl font-bold mt-2">{credits} Credits</p>
    </div>
  );
};

export default BalanceHeader;
