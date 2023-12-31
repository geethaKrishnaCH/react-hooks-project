import React, { useEffect, useState } from "react";
import MainHeader from "./components/main-header/MainHeader";
import MainContent from "./components/main-content/MainContent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogout() {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn((prev) => !prev);
  }
  function handleLogin() {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn((prev) => !prev);
  }

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn === "true") {
      setIsLoggedIn(storedIsLoggedIn);
    }
  }, []);

  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <MainContent isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </React.Fragment>
  );
}

export default App;
