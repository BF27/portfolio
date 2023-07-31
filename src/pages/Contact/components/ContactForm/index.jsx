import InputLine from "../InputLine";
import emailjs from '@emailjs/browser';
import PropTypes from "prop-types";

const ContactForm = ({showEmailSent}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    e.target.reset();
    showEmailSent();
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={(e)=>handleSubmit(e)}>
      <InputLine type={"text"} name={"name"} textarea={false} />
      <InputLine type={"email"} name={"email"} textarea={false} />
      <InputLine textarea={true} name={"message"} />
      <button
        type="submit"
        className="text-lg uppercase text-light-bg font-fontHeading bg-blue border-4 border-blue hover:bg-light-bg p-2 hover:text-blue transition duration-500 ease-in-out"
      >
        Send
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  showEmailSent: PropTypes.func.isRequired,
};

export default ContactForm;
