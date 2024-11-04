import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

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
      <Input
        placeholder="Search messages..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onPressEnter={handleSearch}
        className="flex-grow"
      />
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={handleSearch}
        className="ml-2 bg-cyan-600 hover:bg-cyan-700"
      />
    </div>
  );
}
