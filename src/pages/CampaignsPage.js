import React from 'react';
import { Link } from 'react-router-dom';

const CampaignsPage = () => {
  // Sample data - replace with API data in real implementation
  const campaigns = [
    {
      id: 1,
      title: 'Clean Water for Rural Communities',
      description: 'Help provide clean and safe drinking water to rural areas.',
      raised: 5000,
      goal: 10000,
    },
    {
      id: 2,
      title: 'Education for Every Child',
      description: 'Support educational programs for underprivileged children.',
      raised: 8000,
      goal: 15000,
    },
    {
      id: 3,
      title: 'Healthcare Access in Remote Areas',
      description: 'Fund healthcare initiatives in remote communities.',
      raised: 3000,
      goal: 12000,
    },
  ];

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Active Campaigns</h1>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{campaign.title}</h2>
              <p className="text-gray-600 mb-4">{campaign.description}</p>

              {/* Progress Bar */}
              <div className="bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-blue-600 h-4 rounded-full"
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold">${campaign.raised}</span> raised of ${campaign.goal}
              </p>

              {/* View Details Button */}
              <Link to={`/campaign/${campaign.id}`}>
                <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
