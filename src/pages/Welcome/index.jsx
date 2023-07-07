import { useEffect } from "react";
import Header from "../../components/Header";

const Welcome = ({changePage}) => {
  useEffect(() => {
    changePage("welcome");
  },[]);
  return (
    <>
      <Header/>
      <main></main>
    </>
  );
};

export default Welcome;
