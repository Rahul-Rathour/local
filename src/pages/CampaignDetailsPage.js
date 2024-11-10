import React from 'react';
import { useParams } from 'react-router-dom';

const CampaignDetailsPage = () => {
  const { id } = useParams(); // Get campaign ID from URL

  // Sample data - replace with API or blockchain data in real implementation
  const campaign = {
    id: id,
    title: 'Clean Water for Rural Communities',
    description:
      'This campaign aims to provide clean and safe drinking water to underserved rural communities. Your contributions will help build wells, provide water purification solutions, and promote hygiene practices.',
    raised: 5000,
    goal: 10000,
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    creator: '0x123456789ABCDEF',
  };

  // Sample function for submitting contributions
  const handleContribution = (event) => {
    event.preventDefault();
    // Logic to connect to wallet and handle contribution goes here
    alert(`Contributed to campaign with ID: ${id}`);
  };

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Campaign Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{campaign.title}</h1>
        <p className="text-gray-700 mb-6">{campaign.description}</p>

        {/* Campaign Progress and Details */}
        <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-500">Funds Raised:</p>
              <p className="text-xl font-semibold text-blue-600">${campaign.raised}</p>
            </div>
            <div>
              <p className="text-gray-500">Funding Goal:</p>
              <p className="text-xl font-semibold text-gray-700">${campaign.goal}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-600 h-4 rounded-full"
              style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
            ></div>
          </div>
          <p className="text-gray-500 mb-4">{((campaign.raised / campaign.goal) * 100).toFixed(2)}% funded</p>

          {/* Campaign Dates */}
          <div className="text-gray-600 mb-4">
            <p>Start Date: {campaign.startDate}</p>
            <p>End Date: {campaign.endDate}</p>
            <p>Campaign Creator: <span className="font-mono text-blue-600">{campaign.creator}</span></p>
          </div>
        </div>

        {/* Contribution Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contribute to this Campaign</h2>
          <form onSubmit={handleContribution}>
            <label className="block text-gray-700 mb-2" htmlFor="contributionAmount">
              Contribution Amount (in USD)
            </label>
            <input
              type="number"
              id="contributionAmount"
              name="contributionAmount"
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
              placeholder="Enter amount"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Contribute
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
