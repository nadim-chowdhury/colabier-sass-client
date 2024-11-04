import React from "react";

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div>
      <header>Header with Navigation</header>
      <div className="content">{children}</div>
    </div>
  );
};
