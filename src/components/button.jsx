const button = ({ text, onClick, disabled }) => {
  return (
    <div className="flex flex-col mb-4 w-fit">
      <button
        disabled={disabled}
        onClick={onClick}
        type="button"
        className={`bg-blue-500 text-white py-2 px-4 rounded-md ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default button;
