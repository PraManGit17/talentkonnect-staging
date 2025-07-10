import React, { useState } from 'react';
import AdminClusteringDashboard from '../components/AdminClusteringDashboard';
import AdminAnalyticsDashboard from '../components/AdminAnalyticsDashboard';
import { BarChart3, Layers } from 'lucide-react';
import { Logo } from '../components/logo';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('clustering');

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <header className="bg-white shadow-sm w-full">
        <div className="container mx-auto px-20 py-4 flex justify-between items-center">
          <Logo size="default" />
          <div className='flex items-center gap-2'>
            <button
              onClick={() => setActiveTab('clustering')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'clustering'
                ? 'bg-[#1D3557] text-white'
                : 'bg-white text-[#1D3557] border border-gray-300 hover:bg-gray-100'
                }`}
            >
              <Layers size={18} /> Clustering
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${activeTab === 'analytics'
                ? 'bg-[#1D3557] text-white'
                : 'bg-white text-[#1D3557] border border-gray-300 hover:bg-gray-100'
                }`}
            >
              <BarChart3 size={18} /> Analytics
            </button>
          </div>
        </div>

      </header>

      <div className="bg-green-100/40 rounded-lg shadow-sm p-4 h-screen">
        {activeTab === 'clustering' ? <AdminClusteringDashboard /> : <AdminAnalyticsDashboard />}
      </div>
    </div>
  );
};

export default AdminDashboard;

