"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "https://admin.hayedconsulting.com/api/send-reset-password",
        {
          email,
        }
      );

      if (response.status === 200) {
        setMessage("Check your email for reset password link.");
        // Navigate to a success page or display a message
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(
          error.response.data.message ||
            "Failed to send reset password email. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-6">Reset Password</h1>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2">
          Send Reset Password Link
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
