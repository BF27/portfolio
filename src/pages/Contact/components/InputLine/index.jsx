const InputLine = ({ textarea, type, name }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={`${name}-input`}
        className="text-blue uppercase font-fontHeading text-lg"
      >
        {name}
      </label>
      {!textarea ? (
        <input
          className="border-blue border-4"
          type={type}
          name={name}
          id={`${name}-input`}
          required
        />
      ) : (
        <textarea
          id={`${name}-input`}
          name={name}
          className="border-4 border-blue h-28 md:h-48"
          required
        ></textarea>
      )}
    </div>
  );
};

export default InputLine;
