const ButtonPrimary = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-semibold  bg-black px-4 py-2 border-2 border-[#593A36] rounded hover:bg-[#593A36] active:bg-[#402a27] transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1"
    >
      {label}
    </button>
  );
};

export default ButtonPrimary;
