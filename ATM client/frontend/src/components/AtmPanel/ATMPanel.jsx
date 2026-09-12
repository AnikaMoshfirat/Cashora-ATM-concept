import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMoneyBillWave, FaArrowRight, FaSignOutAlt, FaLock, FaUserAlt } from "react-icons/fa"; // React Icons
import { getBalance, deposit, withdraw, transfer } from "../../myapi/auth"; // Import API functions

const ATMPanel = () => {
  const navigate = useNavigate();
  const [balance, setBalance] = useState(null);
  const [amount, setAmount] = useState("");
  const [recipientId, setRecipientId] = useState("");
  const [action, setAction] = useState("balance");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleLogout = () => {
    document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    navigate("/");
  };

  useEffect(() => {
    const authToken = getAuthToken();
    if (!authToken) {
      navigate("/sign-in");
    }
  }, [navigate]);

  const handleGetBalance = async () => {
    setLoading(true);
    try {
      const data = await getBalance();
      setBalance(data.balance);
      setMessage("Balance retrieved successfully!");
      setError("");
      setTimeout(() => setMessage(""), 4000); // Clear message after 4 seconds
    } catch (err) {
      setError("Failed to retrieve balance.");
      setMessage("");
      setTimeout(() => setError(""), 4000); // Clear error after 4 seconds
    } finally {
      setLoading(false);
    }
  };

  const handleDeposit = async () => {
    setLoading(true);
    try {
      const data = await deposit(parseFloat(amount));
      setMessage(`Deposit successful! Transaction ID: ${data.transaction.transactionId}`);
      setBalance(data.balance);
      setAmount(""); // Clear input after success
      setError("");
      setTimeout(() => setMessage(""), 4000); // Clear message after 4 seconds
    } catch (err) {
      setError("Deposit failed. Please try again.");
      setMessage("");
      setTimeout(() => setError(""), 4000); // Clear error after 4 seconds
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async () => {
    setLoading(true);
    try {
      const data = await withdraw(parseFloat(amount));
      setMessage(`Withdrawal successful! Transaction ID: ${data.transaction.transactionId}`);
      setBalance(data.balance);
      setAmount(""); // Clear input after success
      setError("");
      setTimeout(() => setMessage(""), 4000); // Clear message after 4 seconds
    } catch (err) {
      setError("Withdrawal failed. Please try again.");
      setMessage("");
      setTimeout(() => setError(""), 4000); // Clear error after 4 seconds
    } finally {
      setLoading(false);
    }
  };

  const handleTransfer = async () => {
    setLoading(true);
    try {
      const data = await transfer(parseFloat(amount), recipientId);
      setMessage(`Transfer successful! Transaction ID: ${data.transaction.transactionId}`);
      setAmount(""); // Clear input after success
      setRecipientId(""); // Clear recipient ID after success
      setError("");
      setTimeout(() => setMessage(""), 4000); // Clear message after 4 seconds
    } catch (err) {
      setError("Transfer failed. Please check recipient ID and try again.");
      setMessage("");
      setTimeout(() => setError(""), 4000); // Clear error after 4 seconds
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col md:flex-row justify-center">
      {/* Sidebar Navigation */}
      <div className="md:w-1/4 w-full bg-blue-700 text-white p-6 flex flex-col shadow-lg">
        <h2 className="text-3xl font-bold mb-6">RF Bank</h2>
        <div className="flex flex-col gap-6">
          <button
            className={`flex items-center p-4 text-lg rounded ${action === "balance" ? "bg-blue-800" : "bg-blue-600"}`}
            onClick={() => setAction("balance")}
          >
            <FaMoneyBillWave className="mr-3" /> Check Balance
          </button>
          <button
            className={`flex items-center p-4 text-lg rounded ${action === "deposit" ? "bg-blue-800" : "bg-blue-600"}`}
            onClick={() => setAction("deposit")}
          >
            <FaMoneyBillWave className="mr-3" /> Deposit
          </button>
          <button
            className={`flex items-center p-4 text-lg rounded ${action === "withdraw" ? "bg-blue-800" : "bg-blue-600"}`}
            onClick={() => setAction("withdraw")}
          >
            <FaMoneyBillWave className="mr-3" /> Withdraw
          </button>
          <button
            className={`flex items-center p-4 mb-4 text-lg rounded ${action === "transfer" ? "bg-blue-800" : "bg-blue-600"}`}
            onClick={() => setAction("transfer")}
          >
            <FaArrowRight className="mr-3" /> Transfer
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center p-4 text-lg mt-auto bg-red-500 text-white rounded"
        >
          <FaSignOutAlt className="mr-3" /> Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="md:w-3/4 w-full p-6 flex flex-col gap-6">
        {/* User Info */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div className="flex items-center">
            <FaUserAlt className="text-4xl mr-4 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold">Welcome, User</h3>
              <p className="text-sm text-gray-600">Enjoy safe and easy banking with us.</p>
            </div>
          </div>
        </div>

        {/* Action Forms */}
        <div className="bg-white shadow-md rounded p-6 flex-1 justify-center">
          {action === "balance" && (
            <div>
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
                onClick={handleGetBalance}
                disabled={loading}
              >
                {loading ? "Loading..." : "Get Balance"}
              </button>
              {balance !== null && <p className="mt-4 text-2xl font-semibold">Your balance is: <span className="text-blue-600">${balance}</span></p>}
            </div>
          )}

          {(action === "deposit" || action === "withdraw") && (
            <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded-lg p-4 mb-6"
                placeholder="Enter amount"
              />
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
                onClick={action === "deposit" ? handleDeposit : handleWithdraw}
                disabled={loading}
              >
                {loading ? "Loading..." : action === "deposit" ? "Deposit" : "Withdraw"}
              </button>
            </div>
          )}

          {action === "transfer" && (
            <div>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded-lg p-4 mb-6"
                placeholder="Enter amount"
              />
              <input
                type="text"
                value={recipientId}
                onChange={(e) => setRecipientId(e.target.value)}
                className="w-full border rounded-lg p-4 mb-6"
                placeholder="Enter recipient ID"
              />
              <button
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
                onClick={handleTransfer}
                disabled={loading}
              >
                {loading ? "Loading..." : "Transfer"}
              </button>
            </div>
          )}
        </div>

        {/* Security Tips */}
        <div className="bg-blue-100 border border-blue-300 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FaLock className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-xl font-semibold">Security Tips</h2>
          </div>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Always log out after completing your transactions.</li>
            <li>Never share your PIN or password with anyone.</li>
            <li>Report any suspicious activity immediately to the bank.</li>
          </ul>
        </div>

        {/* Message */}
        {message && (
          <div className="mt-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
            <p>{message}</p>
          </div>
        )}
        {error && (
          <div className="mt-4 p-4 bg-red-500 text-white rounded-lg shadow-lg">
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ATMPanel;
