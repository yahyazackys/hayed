"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nohp, setNohp] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string[] }>({});
  const router = useRouter();
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    try {
      const response = await axios.post(
        "https://admin.hayedconsulting.com/api/register",
        {
          name: name,
          email: email,
          password: password,
          no_hp: nohp,
        },
        {
          headers: {
            api_key: apiKey,
          },
        }
      );
      if (response.data.success) {
        router.push("/login");
      } else {
        // Handle validation errors
        const validationErrors = response.data.data || {};
        setErrors(validationErrors);
      }
    } catch (error) {
      console.error("Registration error:", error);
      if (axios.isAxiosError(error) && error.response) {
        // Handle Axios error response
        const serverErrors = error.response.data.data || {};
        setErrors(serverErrors);
      } else {
        setErrors({ general: ["Registration failed. Please try again."] });
      }
    }
  };

  return (
    <div className="w-full flex flex-row h-screen">
      <div className="flex flex-col w-1/2 items-center justify-center bg-[#00213F]">
        <h1 className="text-[40px] font-bold text-white">Hayed Consulting</h1>
        <p className="text-white">
          Register yourself and start using Hayed Consulting Forum right now
        </p>
        <Link
          href={"/login"}
          className="mt-12 border border-white px-20 py-2 rounded-full text-white hover:bg-white hover:border-black-original hover:text-black-original hover:cursor-pointer"
        >
          Sign In
        </Link>
      </div>
      <div className="flex flex-col w-1/2 justify-center items-center">
        <h1 className="text-[40px] font-bold mb-4">Sign Up</h1>
        {errors.general && (
          <p className="text-red-500">{errors.general.join(", ")}</p>
        )}
        <form onSubmit={handleSubmit} className="w-1/2">
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-black-original px-4 py-2 bg-white rounded-full"
              required
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.join(", ")}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-black-original px-4 py-2 bg-white rounded-full"
              required
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.join(", ")}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">No Handphone</label>
            <input
              type="text"
              value={nohp}
              onChange={(e) => setNohp(e.target.value)}
              className="w-full border border-black-original px-4 py-2 bg-white rounded-full"
              required
            />
            {errors.no_hp && (
              <p className="text-red-500">{errors.no_hp.join(", ")}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-black-original px-4 py-2 bg-white rounded-full"
              required
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.join(", ")}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#00213F] w-full text-white px-20 rounded-full py-3 hover:bg-white border hover:border-black-original hover:text-black-original"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
