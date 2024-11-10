import React, { useState } from 'react';

const ProfilePage = () => {
  // Sample user data
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    walletAddress: '0x123456789ABCDEF',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ ...formData });
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="bg-gray-100 py-10 px-6 md:px-20">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Profile</h1>

        {/* Profile Card */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Information</h2>

          {isEditing ? (
            // Edit Form
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label htmlFor="walletAddress" className="block text-gray-700 font-medium mb-2">Wallet Address</label>
                <input
                  type="text"
                  id="walletAddress"
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  disabled
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={toggleEdit}
                  className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            // Display Profile Info
            <div>
              <p className="text-gray-700 mb-4"><strong>Name:</strong> {user.name}</p>
              <p className="text-gray-700 mb-4"><strong>Email:</strong> {user.email}</p>
              <p className="text-gray-700"><strong>Wallet Address:</strong> <span className="font-mono">{user.walletAddress}</span></p>

              <button
                onClick={toggleEdit}
                className="mt-6 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
