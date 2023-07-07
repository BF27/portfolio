import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import { ActualPageContext } from "./contexts/ActualPageContext";
import TopBar from "./components/TopBar";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import "./styles/App.css";

function App() {
const [page, setPage] = useState("welcome");

const changePage = (page) => {
  setPage(page);
}
  return (
    <>
      <TopBar />
      <ActualPageContext.Provider value={page}>
      <Routes>
        <Route path="/" element={<Welcome changePage={changePage}/>} />
        <Route path="/about" element={<About changePage={changePage}/>} />
        <Route path="/projects" element={<Projects changePage={changePage}/>} />
        <Route path="/contact" element={<Contact changePage={changePage}/>} />
      </Routes>
      </ActualPageContext.Provider>
    </>
  );
}

export default App;
