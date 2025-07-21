import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("dark");
  const [alertmode, setalertmode] = useState(null);

  const showalert = (message, type) => {
    setalertmode({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalertmode(null);
    }, 2000); // hide alert after 2 sec
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "lightblue";
      showalert("lightblue mode is on", "success");
      document.title = "textutils - lightblue Mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "grey";
      showalert("gray mode is on", "success");
      document.title = "textutils - grey Mode";
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils"
        mode={mode}
        abouttext="About"
        togglemode={togglemode}
      />
      <Alert alert={alertmode} />
      <div className="container pt-4">
        <Routes>
          <Route
            path="/"
            element={
              <Textform heading="Enter text below" showalert={showalert} />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/alert" element={<Alert alert={alertmode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
