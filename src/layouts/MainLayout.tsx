export const MainLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="content">{children}</div>;
};
