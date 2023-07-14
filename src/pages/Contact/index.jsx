import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ContactForm from "./components/ContactForm";
import MainContainer from "../../components/MainContainer";
import Title from "../../components/Title";

const Contact = ({ changePage }) => {
  const [emailSent, setEmailSent] = useState(false);

  function showEmailSent() {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 5000);
  }

  useEffect(() => {
    changePage("contact");
  }, []);
  return (
    <>
      <Header />
      <MainContainer>
        <div className="lg:w-4/6 mx-4 md:mx-0 flex flex-col items-center">
          <Title title={"Send me a message!"} />
          <div className="border-4 border-blue md:w-1/2 p-4">
            <ContactForm showEmailSent={showEmailSent} />
          </div>
          {emailSent ? (
            <div className="container md:w-1/2 mx-4 p-4 text-blue">
              Thank you! Your Email has been sent!
            </div>
          ) : (
            <div className="container md:w-1/2 mx-4 p-4 text-blue">
              Or send me an email to:{" "}
              <a href="mailto:farkas.bence27@gmail.com">
                farkas.bence27@gmail.com
              </a>
            </div>
          )}
        </div>
      </MainContainer>
    </>
  );
};

export default Contact;
