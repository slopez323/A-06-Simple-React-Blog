import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
