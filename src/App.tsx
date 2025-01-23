import React, { useState } from 'react';
import HabitsPage from './HabitsPage';

function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const queryParam = input.includes('@') ? `email=${input}` : `username=${input}`;
      

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'An error occurred');
        return;
      }

      const data = await response.json();
      setUserId(data.userId); // Store the user ID on success
    } catch (err) {
      setError('Failed to fetch user ID. Please try again.');
      console.error('Error:', err);
    }
  };

  if (userId) {
    // If user ID is fetched, render the habits page
    return <HabitsPage />;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4 text-center">Retrieve User ID</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="input" className="block text-gray-700 mb-2">
              Username or Email:
            </label>
            <input
              id="input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Enter your username or email"
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;