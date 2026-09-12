import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../Redux/userSlice"; // Assuming you have this in your store
import { getUsers, getTransactions } from "../../myapi/auth";

const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading: userLoading } = useSelector((state) => state.user); // Get current user state from Redux
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [view, setView] = useState("users");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true); // For loader
  const [redirecting, setRedirecting] = useState(false); // To control redirect behavior
  const [searchQuery, setSearchQuery] = useState(""); // For search query input

  // Function to get auth token from cookies
  const getAuthToken = () => {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === "auth_token") {
        return value;
      }
    }
    return null;
  };

  // Handle Logout
  const handleLogout = () => {
    // Clear cookies
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    // Dispatch logout action
    dispatch(signOut());

    // Redirect to home page
    navigate("/");
  };

  useEffect(() => {
    // If user is not an admin, navigate to home page
    if (user && user.adminstatus === 0) {
      navigate("/");
      return; // Exit the useEffect early if user is not an admin
    }

    const authToken = getAuthToken();
    if (!authToken) {
      setError("You are not logged in.");
      setRedirecting(true);
      setTimeout(() => {
        navigate("/sign-in");
      }, 5000); // Wait for 5 seconds before redirect
    } else {
      setLoading(false); // Data is loaded, no need for loader
      if (view === "users") {
        fetchUsers();
      } else {
        fetchTransactions();
      }
    }
  }, [navigate, user, view]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      const parsedData = data.map((user) => ({
        ...user,
        balance: Number(user.balance),
      }));
      setUsers(parsedData);
      setFilteredUsers(parsedData); // Initially show all users
      setError("");
    } catch (err) {
      setError(err.message || "An error occurred while fetching users.");
    }
  };

  const fetchTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
      setFilteredTransactions(data); // Initially show all transactions
      setError("");
    } catch (err) {
      setError(err.message || "An error occurred while fetching transactions.");
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (view === "users") {
      const filtered = users.filter((user) => 
        user.username.toLowerCase().includes(query.toLowerCase()) || 
        user.id.toString().includes(query)
      );
      setFilteredUsers(filtered);
    } else if (view === "transactions") {
      const filtered = transactions.filter((transaction) => 
        transaction.id.toString().includes(query) || 
        transaction.user_id.toString().includes(query) ||
        transaction.type.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">Admin Panel</h1>

        {/* Display loader if redirecting */}
        {redirecting && (
          <div className="flex flex-col items-center justify-center">
            <div className="spinner-border animate-spin border-t-4 border-blue-500 w-16 h-16 border-solid rounded-full mb-4"></div>
            <p className="text-xl text-gray-600">Redirecting...</p>
          </div>
        )}

        {/* Error Message */}
        {error && !redirecting && (
          <div className="text-red-500 mb-4">
            <p>{error}</p>
          </div>
        )}


        {/* Admin Panel Content */}
        {!loading && !redirecting && (
          <>
            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-6">
              <button
                className={`px-6 py-2 rounded-full ${view === "users" ? "bg-blue-600 text-white" : "bg-blue-300"}`}
                onClick={() => setView("users")}
              >
                View Users
              </button>
              <button
                className={`px-6 py-2 rounded-full ${view === "transactions" ? "bg-blue-600 text-white" : "bg-blue-300"}`}
                onClick={() => setView("transactions")}
              >
                View Transactions
              </button>
            </div>

            {/* Logout Button */}
            <button
              className="px-6 py-2 rounded-full bg-red-600 text-white mb-6"
              onClick={handleLogout}
            >
              Logout
            </button>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search..."
            className="px-4 py-2 border rounded-lg w-full max-w-xs"
          />
        </div>
            {/* Users Table */}
            {view === "users" && (
              <div className="bg-white shadow-md rounded p-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-800">Users</h2>
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">Username</th>
                      <th className="px-4 py-2">Balance</th>
                      <th className="px-4 py-2">Admin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => (
                      <tr key={user.id} className="border-b border-blue-200">
                        <td className="px-4 py-2">{user.id}</td>
                        <td className="px-4 py-2">{user.username}</td>
                        <td className="px-4 py-2">${user.balance.toFixed(2)}</td>
                        <td className="px-4 py-2">{user.adminstatus ? "Yes" : "No"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Transactions Table */}
            {view === "transactions" && (
              <div className="bg-white shadow-md rounded p-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-800">Transactions</h2>
                <table className="table-auto w-full text-left">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="px-4 py-2">ID</th>
                      <th className="px-4 py-2">User ID</th>
                      <th className="px-4 py-2">Type</th>
                      <th className="px-4 py-2">Amount</th>
                      <th className="px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-b border-blue-200">
                        <td className="px-4 py-2">{transaction.id}</td>
                        <td className="px-4 py-2">{transaction.user_id}</td>
                        <td className="px-4 py-2 capitalize">{transaction.type}</td>
                        <td className="px-4 py-2">${Number(transaction.amount).toFixed(2)}</td>
                        <td className="px-4 py-2">
                          {new Date(transaction.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
