"use client";

import { useState } from "react";

interface Version {
  id: string;
  timestamp: string;
  content: string;
}

interface VersionHistoryProps {
  versions: Version[];
  onRestoreVersion: (version: Version) => void;
}

export default function VersionHistory({
  versions,
  onRestoreVersion,
}: VersionHistoryProps) {
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(null);

  const handleRestore = (version: Version) => {
    setSelectedVersion(version);
    onRestoreVersion(version);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h4 className="text-lg font-semibold mb-4">Version History</h4>
      <ul className="space-y-2">
        {versions.map((version) => (
          <li
            key={version.id}
            className="flex justify-between items-center border-b border-gray-300 pb-2"
          >
            <span>{version.timestamp}</span>
            <button
              onClick={() => handleRestore(version)}
              className="px-4 py-1 bg-blue-500 text-white rounded"
            >
              Restore
            </button>
          </li>
        ))}
      </ul>
      {selectedVersion && (
        <div className="mt-4">
          <h5 className="text-md font-semibold">Selected Version</h5>
          <p>{selectedVersion.content}</p>
        </div>
      )}
    </div>
  );
}
