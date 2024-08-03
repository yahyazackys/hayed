import { useState } from "react";
import { useRouter } from "next/navigation";
import { CiSearch } from "react-icons/ci";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (query.trim() === "") return;
    router.push(`/article/search-results?keyword=${encodeURIComponent(query)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className=" w-full xl:px-0 xl:w-auto relative"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-300 h-10 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          placeholder="Search"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-4 flex items-center justify-center"
        >
          <CiSearch className="text-2xl text-black-soft" />
        </button>
      </div>
      {/* <form
          action=""
          className="max-w-[320px] w-full px-4 hidden xl:block relative"
        >
          <div className="relative">
            <input
              type="text"
              name="q"
              className="w-full border h-10 shadow p-4 rounded-full"
              placeholder="search"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-4 flex items-center justify-center"
            >
              <CiSearch className="text-2xl text-black-soft" />
            </button>
          </div>
        </form> */}
    </form>
  );
};

export default SearchForm;
