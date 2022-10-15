const Watermark = ({ label }) => {
  return (
    <div className="absolute bottom-2 right-4 select-none hidden md:flex">
      <p className=" font-black">{label}</p>
    </div>
  );
};

export default Watermark;
