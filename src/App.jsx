import { Route, Routes, Link } from "react-router-dom";

import "./styles/App.css";

function App() {
  console.log(import.meta.env.VITE_FIREBASE_API_KEY);
  return (
    <>
      <h1 className="font-bold text-3xl">Hello World!</h1>
    </>
  );
}

export default App;
