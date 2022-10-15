const Container = ({ children }) => {
  return (
    <div className="grid place-items-center h-screen w-full">
      <div>{children}</div>
    </div>
  );
};

export default Container;
