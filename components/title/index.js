const Title = ({ label, fixed = false }) => {
  return (
    <div className={`text-center w-full ${fixed ? "absolute top-8" : "py-8"}`}>
      <p className="font-black text-3xl md:text-5xl">{label}</p>
    </div>
  );
};

export default Title;
