const Form = ({ handleSubmit, children }) => {
  return (
    <form
      className="flex flex-col gap-2 h-fit w-[75%] min-w-[300px] max-w-[400px] items-stretch justify-center bg-white py-4 px-2 rounded-md"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
