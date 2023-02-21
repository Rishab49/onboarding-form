const Label = ({ text, children }) => {
  return (
    <label className="text-sm text-gray-400 w-full">
      {text}*
      {children}
    </label>
  );
};

export default Label;
