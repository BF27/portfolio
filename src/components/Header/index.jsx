import { useContext, useState, useEffect } from "react";
import {db} from "../../utils/initFirebase";
import { doc, getDoc } from "firebase/firestore";
import { ActualPageContext } from "../../contexts/ActualPageContext";

const Header = () => {
  const page = useContext(ActualPageContext);

  const [title, setTitle] = useState(null);
  const [headerText, setHeaderText] = useState(null);

  useEffect(() => {
    const getDocument = async () => {
      const docRef = doc(db, "Pages", page);
      const docSnap = await getDoc(docRef);
      setTitle(docSnap.data().title);
      setHeaderText(docSnap.data().headerText);
    };
    getDocument();
  }, [page]);

  return (
    <header className="md:border-b-4 border-blue text-blue">
      <div className="container mx-auto flex justify-center">
        <div className="hidden w-1/6">img</div>
        <div className="md:w-4/6 md:border-x-4 border-blue flex flex-col p-4 xl:px-10 2xl:px-28">
          <h2 className="text-center text-4xl sm:text-5xl lg:text-7xl xl:text-8xl p-4 lg:p-10">
            {title}
          </h2>
          {headerText && <p>{headerText}</p>}
        </div>
        <div className="hidden w-1/6">img</div>
      </div>
    </header>
  );
};

export default Header;
