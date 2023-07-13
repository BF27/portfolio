import { useEffect } from "react";
import Header from "../../components/Header";
import ContactForm from "./components/ContactForm";

const Contact = ({ changePage }) => {
  useEffect(() => {
    changePage("contact");
  }, []);
  return (
    <>
      <Header />
      <main className="h-full flex flex-col items-center justify-center mt-6 mb-32 gap-4 px-4">
        <h3 className="text-blue text-2xl sm:text-3xl">Send me a message</h3>
        <div className="container border-4 border-blue md:w-1/2 mx-4 p-4">
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default Contact;
