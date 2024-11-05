"use client";

import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function FileUpload() {
  const [message, setMessage] = useState("");

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if file size is defined and limit to 5MB
      const isAllowed = file.size / 1024 / 1024 < 5;
      if (!isAllowed) {
        setMessage(`${file.name} is too large (max 5MB)`);
        return;
      }

      // Simulate a successful upload for demo purposes
      setMessage(`${file.name} uploaded successfully.`);
      event.target.value = ""; // Reset file input
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <label
          htmlFor="file-upload"
          className="bg-cyan-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-cyan-700 flex items-center space-x-2"
        >
          <FaUpload />
          <span>Upload File</span>
          <input
            id="file-upload"
            type="file"
            onChange={handleUpload}
            className="hidden"
          />
        </label>
      </div>
      {message && <p className="text-red-500 mt-2">{message}</p>}
    </div>
  );
}
