import { useEffect } from "react";
import Header from "../../components/Header";

const Contact = ({ changePage }) => {
  useEffect(() => {
    changePage("contact");
  }, []);
  return <Header />;
};

export default Contact;
