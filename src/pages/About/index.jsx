import { useEffect } from "react";
import Header from "../../components/Header";

const About = ({ changePage }) => {
  
  useEffect(() => {
    changePage("about");
  }, []);

  return <Header />;
};

export default About;
