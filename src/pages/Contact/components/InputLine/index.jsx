import PropTypes from "prop-types";

const InputLine = ({ textarea, type, name }) => {
  return (
    <div className="flex flex-col">
      {!textarea ? (
        <input
          className="border-blue border-b-4 text-blue text-fontBody uppercase autofill:bg-light-bg"
          type={type}
          name={name}
          id={`${name}-input`}
          placeholder={name}
          required
        />
      ) : (
        <textarea
          id={`${name}-input`}
          name={name}
          placeholder={name}
          className="border-4 border-blue h-28 md:h-48 text-blue text-fontBody uppercase"
          required
        ></textarea>
      )}
    </div>
  );
};

InputLine.propTypes = {
  textarea: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputLine;
