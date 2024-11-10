import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          About Our <span className="text-blue-600">Fundraiser dApp</span>
        </h1>

        {/* Introduction Section */}
        <section className="bg-white p-8 shadow-lg rounded-lg mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our fundraiser dApp is built with the aim of democratizing
            fundraising through blockchain technology. We believe in empowering
            individuals and organizations to launch and manage their own
            campaigns with transparency, security, and trust.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="bg-white p-8 shadow-lg rounded-lg mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our platform utilizes blockchain to create a decentralized
            fundraising ecosystem. Here's a quick overview of how it works:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="hover:text-blue-600 transition duration-300">
              Users can create a campaign, setting a goal and detailing the purpose and impact of their fundraiser.
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              Contributors can donate to campaigns using cryptocurrency, ensuring seamless transactions and global access.
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              All funds raised are tracked on the blockchain, ensuring full transparency and accountability.
            </li>
            <li className="hover:text-blue-600 transition duration-300">
              Once the campaign reaches its goal, funds are made available to the campaign owner, who can then use them for the intended cause.
            </li>
          </ul>
        </section>

        {/* Key Features Section */}
        <section className="bg-white p-8 shadow-lg rounded-lg mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Key Features
          </h2>
          <div className="space-y-6">
            <div className="group">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                Decentralized Platform
              </h3>
              <p className="text-gray-700">
                Our dApp leverages the power of blockchain, ensuring that all
                transactions are transparent and secure. With decentralization,
                we eliminate the need for intermediaries, reducing fees and
                delays.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                Real-Time Tracking
              </h3>
              <p className="text-gray-700">
                Donors can track the progress of the campaigns they support,
                seeing real-time updates on funds raised. This builds trust and
                fosters long-term engagement.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                Global Accessibility
              </h3>
              <p className="text-gray-700">
                Using cryptocurrency for contributions allows anyone, anywhere
                in the world, to support causes they believe in, without the
                limitations of traditional banking systems.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
                Secure Transactions
              </h3>
              <p className="text-gray-700">
                All transactions are secured through the blockchain, ensuring
                that funds are safely transferred and stored without risk of
                tampering or fraud.
              </p>
            </div>
          </div>
        </section>

        {/* Transparency and Trust Section */}
        <section className="bg-white p-8 shadow-lg rounded-lg mb-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Transparency and Trust
          </h2>
          <p className="text-gray-700 leading-relaxed">
            By using blockchain technology, we provide transparency that
            traditional fundraising platforms can’t offer. Every transaction is
            recorded on a public ledger, enabling donors to verify the flow of
            funds. This transparency builds trust, ensuring that funds are used
            for the intended purposes.
          </p>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 shadow-lg rounded-lg text-white text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="leading-relaxed mb-6">
            Whether you’re a campaigner looking to raise funds for a worthy
            cause, or a donor ready to support change, our dApp provides the
            tools and security you need to make a lasting impact.
          </p>
          <a
            href="/create-campaign"
            className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition duration-300 shadow-md"
          >
            Start Your Campaign
          </a>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
