import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  // Sample data - replace with API or blockchain data in real implementation
  const user = {
    name: 'John Doe',
    address: '0x123456789ABCDEF',
    campaignsCreated: [
      { id: 1, title: 'Clean Water for Rural Communities', raised: 5000, goal: 10000 },
      { id: 2, title: 'Education for Every Child', raised: 8000, goal: 15000 },
    ],
    contributions: [
      { id: 1, campaignTitle: 'Healthcare Access in Remote Areas', amount: 200, date: '2024-10-10' },
      { id: 2, campaignTitle: 'Reforestation Project', amount: 100, date: '2024-10-15' },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">User Dashboard</h1>

        {/* User Info */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Account Information</h2>
          <p className="text-gray-700"><strong>Name:</strong> {user.name}</p>
          <p className="text-gray-700"><strong>Wallet Address:</strong> <span className="font-mono">{user.address}</span></p>
        </div>

        {/* Campaigns Created */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Campaigns</h2>
          {user.campaignsCreated.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {user.campaignsCreated.map((campaign) => (
                <div key={campaign.id} className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">{campaign.title}</h3>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">${campaign.raised}</span> raised of ${campaign.goal}
                  </p>
                  <div className="bg-gray-200 rounded-full h-4 mb-4">
                    <div
                      className="bg-blue-600 h-4 rounded-full"
                      style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                    ></div>
                  </div>
                  <Link to={`/campaign/${campaign.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    View Campaign
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">You have not created any campaigns yet.</p>
          )}
        </div>

        {/* Contributions */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Contributions</h2>
          {user.contributions.length > 0 ? (
            <ul className="space-y-4">
              {user.contributions.map((contribution) => (
                <li key={contribution.id} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700 font-semibold">{contribution.campaignTitle}</p>
                  <p className="text-gray-600">
                    Contributed <span className="font-semibold">${contribution.amount}</span> on {contribution.date}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">You have not made any contributions yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
