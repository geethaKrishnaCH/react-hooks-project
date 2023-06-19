import React, { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";
import MainContent from "./components/MainContent/MainContent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogout() {
    setIsLoggedIn((prev) => !prev);
  }
  return (
    <React.Fragment>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <MainContent isLoggedIn={isLoggedIn} />
    </React.Fragment>
  );
}

export default App;
