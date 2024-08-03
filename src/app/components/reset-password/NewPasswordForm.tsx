// src/app/reset-password/[email]/NewPasswordForm.tsx

"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewPasswordForm = ({ email }: { email: string }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "https://hayed-admin.com/api/set-new-password",
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        setMessage(
          "Password reset successfully. You can now log in with your new password."
        );
        router.push("/login");
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError(
          error.response.data.message ||
            "Failed to reset password. Please try again."
        );
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-6">Set New Password</h1>
      {message && <p className="text-green-500">{message}</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <label className="block mb-2">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border px-4 py-2"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
