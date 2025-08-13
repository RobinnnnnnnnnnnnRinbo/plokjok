const LogInButton = ({ prop, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        type="submit"
        className="text-white active:bg-pmhover hover:bg-pmhover hover:duration-150 font-bold bg-pm w-[75vw] py-4 rounded-xl"
      >
        {prop}
      </button>
    </div>
  );
};

export default LogInButton;
