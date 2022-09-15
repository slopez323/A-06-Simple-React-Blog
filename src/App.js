import { useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Main from "./components/Main";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div className="App">
      <Header user={user} />
      {!user && <Login setUser={setUser} />}
      {user && <Main user={user} />}
    </div>
  );
};

export default App;
