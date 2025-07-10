import React, { useState } from 'react';

const AdminClusteringDashboard = () => {
  const [status, setStatus] = useState('All Statuses');
  const [category, setCategory] = useState('All Categories');

  return (
    <div className="text-[#1d3557]">
      <div className="bg-[#f0f9f4] p-6 rounded-md">

        <div className='flex items-center justify-between space-x-6'>
          <div className="font-bold text-lg max-w-2xl">ADMIN CLUSTERING DASHBOARD</div>
          <div className="text-sm text-gray-600 mt-1">
            Review and manage community submissions with intelligent clustering and bulk actions.
          </div>
          <div className="text-sm text-gray-500">
            <span>Last updated:</span>
            <span className="ml-1 font-medium">8:59:27 PM</span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="bg-white shadow-md rounded-lg p-4 text-center w-32">
              <div className="text-sm text-gray-500">Total Items</div>
              <div className="text-2xl font-semibold text-[#e76f51]">8</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center w-32">
              <div className="text-sm text-gray-500">Pending Review</div>
              <div className="text-2xl font-semibold text-[#e76f51]">5</div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4 text-center w-32">
              <div className="text-sm text-gray-500">Approved</div>
              <div className="text-2xl font-semibold text-[#e76f51]">2</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-md shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by content, tags, or author..."
              className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <button className="bg-[#f26440] text-white px-4 py-2 rounded-md text-sm font-medium">+ Create Item</button>
            <button className="text-gray-600 text-sm">🔄 Refresh</button>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Status</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-52"
              >
                <option>All Statuses</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-sm mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm w-64"
              >
                <option>All Categories</option>
                <option>Home & Living</option>
                <option>Tech & Dev</option>
                <option>Health & Wellness</option>
                <option>Art & Craft</option>
                <option>Career & Business</option>
                <option>Education & Learning</option>
                <option>Finance & Investment</option>
                <option>Travel & Adventure</option>
                <option>Food & Cooking</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-md mb-2">Bulk Actions</h3>
            <div className="flex items-center gap-4 mb-2">
              <button className="bg-[#f4a58a] text-white px-6 py-2 rounded-md text-sm font-semibold flex items-center gap-2">
                ✔ Approve Selected
              </button>

              <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-64 bg-gray-100 text-gray-500" disabled>
                <option>Select category to reassign...</option>
              </select>
              <button className="border border-gray-400 rounded-md px-4 py-2 text-sm text-[#1d3557]">📁 Reassign</button>
            </div>
            <div className="text-sm text-gray-500">Mark selected items as approved for publication</div>
            <div className="text-sm text-gray-400 mt-4 border border-dashed border-gray-300 p-3 rounded-md">
              ⚠ Select items to enable bulk actions
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="border border-orange-300 rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <span>👤 Sarah M.</span>
              </div>
              <div className="text-xs font-medium bg-orange-100 text-orange-600 px-2 py-1 rounded">
                Pending Review
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3">📅 Jan 15, 04:00 PM</div>
            <p className="text-sm mb-4 text-[#1D3557]">
              How to organize your pantry for maximum efficiency and reduce food waste – a complete guide.
            </p>
            <div className="mb-4">
              <div className="text-sm font-semibold mb-1">🏷 Suggested Tags</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">home</span>
                <span className="bg-gray-100 px-2 py-1 rounded">organization</span>
                <span className="bg-gray-100 px-2 py-1 rounded">cooking</span>
                <span className="bg-gray-100 px-2 py-1 rounded">sustainability</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="text-sm font-medium flex items-center gap-2 mt-2">✏️ Category</div>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Home & Living</option>
              <option>Tech & Dev</option>
              <option>Health & Wellness</option>
              <option>Art & Craft</option>
              <option>Career & Business</option>
              <option>Education & Learning</option>
              <option>Finance & Investment</option>
              <option>Travel & Adventure</option>
              <option>Food & Cooking</option>
              <option>Other</option>
            </select>
          </div>

          {/* Card 2 */}
          <div className="border border-transparent rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <span>👤 Alex K.</span>
              </div>
              <div className="text-xs font-medium bg-green-100 text-green-600 px-2 py-1 rounded">
                Approved
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3">📅 Jan 14, 07:52 PM</div>
            <p className="text-sm mb-4 text-[#1D3557]">
              Quick debugging tips for React hooks – common pitfalls and solutions every developer should know.
            </p>
            <div className="mb-4">
              <div className="text-sm font-semibold mb-1">🏷 Suggested Tags</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">tech</span>
                <span className="bg-gray-100 px-2 py-1 rounded">programming</span>
                <span className="bg-gray-100 px-2 py-1 rounded">react</span>
                <span className="bg-gray-100 px-2 py-1 rounded">debugging</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="text-sm font-medium flex items-center gap-2 mt-2">✏️ Category</div>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Home & Living</option>
              <option>Tech & Dev</option>
              <option selected>Tech & Dev</option>
              <option>Health & Wellness</option>
              <option>Art & Craft</option>
              <option>Career & Business</option>
              <option>Education & Learning</option>
              <option>Finance & Investment</option>
              <option>Travel & Adventure</option>
              <option>Food & Cooking</option>
              <option>Other</option>
            </select>
          </div>

          {/* Card 3 */}
          <div className="border border-orange-300 rounded-lg p-4 bg-white shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <span>👤 Mike R.</span>
              </div>
              <div className="text-xs font-medium bg-orange-100 text-orange-600 px-2 py-1 rounded">
                Pending Review
              </div>
            </div>
            <div className="text-xs text-gray-500 mb-3">📅 Jan 14, 02:45 PM</div>
            <p className="text-sm mb-4 text-[#1D3557]">
              Best core strengthening exercises you can do at home without any equipment – 15 minute routine.
            </p>
            <div className="mb-4">
              <div className="text-sm font-semibold mb-1">🏷 Suggested Tags</div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-gray-100 px-2 py-1 rounded">fitness</span>
                <span className="bg-gray-100 px-2 py-1 rounded">workout</span>
                <span className="bg-gray-100 px-2 py-1 rounded">health</span>
                <span className="bg-gray-100 px-2 py-1 rounded">core</span>
                <span className="bg-gray-100 px-2 py-1 rounded">home-workout</span>
              </div>
            </div>
            <hr className="my-2" />
            <div className="text-sm font-medium flex items-center gap-2 mt-2">✏️ Category</div>
            <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm">
              <option>Home & Living</option>
              <option>Tech & Dev</option>
              <option>Health & Wellness</option>
              <option selected>Health & Wellness</option>
              <option>Art & Craft</option>
              <option>Career & Business</option>
              <option>Education & Learning</option>
              <option>Finance & Investment</option>
              <option>Travel & Adventure</option>
              <option>Food & Cooking</option>
              <option>Other</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminClusteringDashboard;
