"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchMessagesProps {
  onSearch: (query: string) => void;
}

export default function SearchMessages({ onSearch }: SearchMessagesProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center p-2 bg-gray-100 rounded-lg">
      <input
        type="text"
        placeholder="Search messages..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSearch()}
        className="flex-grow p-2 border rounded-lg outline-none"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700 flex items-center justify-center focus:outline-none"
      >
        <FaSearch />
      </button>
    </div>
  );
}
