import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 md:px-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Empowering Fundraisers with Blockchain Transparency
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover campaigns, make secure contributions, and witness the impact of decentralized fundraising.
          </p>
          <Link to="/campaigns">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-100 transition duration-300">
              Explore Campaigns
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Campaigns Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Trending Campaigns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Campaign Card */}
            {[1, 2, 3].map((campaign) => (
              <div key={campaign} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Campaign Title {campaign}</h3>
                <p className="text-gray-600 mb-4">Brief description of the campaign’s purpose and goals.</p>
                <Link to={`/campaigns/${campaign}`}>
                  <button className="bg-blue-600 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                    View Details
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card */}
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure Donations</h3>
              <p className="text-gray-600">Make contributions directly from your wallet with blockchain transparency.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Transparent Tracking</h3>
              <p className="text-gray-600">All transactions are recorded on the blockchain for easy tracking.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Community Impact</h3>
              <p className="text-gray-600">See the impact of your donations and stay connected to meaningful projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Wallet Section */}
      <section className="bg-blue-600 py-16 px-6 md:px-20 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white mb-6">Connect your wallet and join a community of change-makers.</p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-blue-100 transition duration-300">
            Connect Wallet
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
