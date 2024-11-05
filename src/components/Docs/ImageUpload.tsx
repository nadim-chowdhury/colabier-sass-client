"use client";

import { useState } from "react";

interface ImageUploadProps {
  onImageUpload: (url: string) => void;
}

export default function ImageUpload({ onImageUpload }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploading(true);
      try {
        const imageUrl = URL.createObjectURL(file);
        onImageUpload(imageUrl);
        alert("Image uploaded successfully!");
      } catch (error) {
        console.log("handleUpload ~ error:", error);
        alert("Failed to upload image.");
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4">Image Upload</h4>
      <input
        type="file"
        onChange={handleUpload}
        accept="image/*"
        className="mb-4"
        disabled={uploading}
        style={{ display: "none" }}
        id="fileInput"
      />
      <label htmlFor="fileInput">
        <button
          type="button"
          className={`px-4 py-2 rounded ${
            uploading ? "bg-gray-300" : "bg-blue-500 text-white"
          } `}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>
      </label>
    </div>
  );
}
