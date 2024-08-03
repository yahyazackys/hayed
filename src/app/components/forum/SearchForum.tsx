import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchForum = () => {
  const [title, setTitle] = useState("");
  const [storedToken, setStoredToken] = useState<string | null>(null);
  const router = useRouter();
  const apiKey = "wnAQvTGkmLG0zLV1zWQlQo7OrA42TbvEvcMLtGbzPGu4NSfXuJ";

  useEffect(() => {
    setStoredToken(localStorage.getItem("token"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!storedToken) {
      console.error("Token is not available");
      router.push("/login");
      return;
    }

    try {
      const response = await axios.post(
        "https://hayed-admin.com/api/forums/create",
        { title: title || "" },
        {
          headers: {
            Authorization: `Bearer ${storedToken}`,
            api_key: apiKey,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setTitle("");
        toast.success("Forum created successfully!");
        router.prefetch("/forum");
      } else {
        toast.error("Error creating forumddd");
      }
    } catch (error) {
      toast.error("Error creating forum12");
    }
  };

  return (
    <div className="max-w-full self-center mx-auto">
      <ToastContainer className={"mt-20"} />
      <form
        className="w-[500px] mt-4 px-4 bg-white rounded-full border transition-all duration-300 focus-within:shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className=" flex items-center w-full">
          <input
            type="text"
            className="w-[82%] h-12 px-4 rounded-full focus:outline-none focus:ring-0 outline-none border-none bg-white transition-all duration-300"
            placeholder="Hi User, What do you want to discuss..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button
            type="submit"
            className="relative max-w-[200px] flex items-center justify-center text-sm transition-all duration-300 hover:text-blue-600"
          >
            Kirim Forum
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForum;
