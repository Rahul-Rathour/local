import React, { useState } from 'react';

const CreateCampaignPage = () => {
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, connect to blockchain here to create the campaign
    console.log('Campaign Created:', { title, description, goal, startDate, endDate });
    alert('Campaign successfully created!');
  };

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Create a New Campaign</h1>

        {/* Campaign Form */}
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Campaign Title</label>
            <input
              type="text"
              id="title"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              id="description"
              className="w-full p-3 border border-gray-300 rounded-md"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="goal" className="block text-gray-700 font-medium mb-2">Funding Goal (in USD)</label>
            <input
              type="number"
              id="goal"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">End Date</label>
            <input
              type="date"
              id="endDate"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Create Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCampaignPage;
