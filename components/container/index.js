const Container = ({ children }) => {
  return (
    <div className="grid place-items-center h-screen w-screen bg-slate-400">
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Container;
