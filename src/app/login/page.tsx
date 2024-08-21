"use client";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setToken, setUser } = useAuth();
  const router = useRouter();
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://admin.hayedconsulting.com/api/login",
        {
          email,
          password,
        },
        {
          headers: {
            api_key: apiKey,
          },
        }
      );

      if (response.data.success) {
        const { role, name } = response.data.data;
        const accessToken = response.data.access_token;

        if (role === "1") {
          setToken(accessToken);
          setUser(name);
          router.push("/");
        } else {
          setError(
            "You do not have the required permissions to access this site."
          );
        }
      } else {
        setError("Login failed. Please check your credentials and try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="w-full flex flex-row h-screen">
      <ToastContainer className={"mt-20"} />
      <div className="flex flex-col w-1/2 justify-center items-center">
        <h1 className="text-[40px] font-bold mb-4">Sign In</h1>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-2 bg-white rounded-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-4 py-2 bg-white rounded-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#00213F] w-full text-white px-20 rounded-full py-3 hover:bg-white border hover:border-black-original hover:text-black-original"
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="flex flex-col w-1/2 items-center justify-center bg-[#00213F]">
        <h1 className="text-[40px] font-bold text-white">Hayed Consulting</h1>
        <p className="text-white">
          Register yourself and start using Hayed Consulting Forum right now
        </p>
        <Link
          href={"/register"}
          className="mt-12 border border-white px-20 py-2 rounded-full text-white hover:bg-white hover:border-black-original hover:text-black-original hover:cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
