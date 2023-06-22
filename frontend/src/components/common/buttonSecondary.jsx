const ButtonSecondary = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="font-semibold  bg-[#593A36] px-4 py-2 border-2 border-black rounded hover:bg-black active:bg-slate-900 transition ease-in-out duration-200 hover:scale-105 hover:translate-y-1"
    >
      {label}
    </button>
  );
};

export default ButtonSecondary;
