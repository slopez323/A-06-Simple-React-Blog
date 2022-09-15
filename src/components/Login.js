import { useState } from "react";

const Login = ({ setUser }) => {
  const [url, setUrl] = useState();
  const [username, setUsername] = useState();

  return (
    <div className="login">
      <h2>Sign In</h2>
      <div className="login-input">
        <label>Username:</label>
        <input onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="login-input">
        <label>Profile Photo URL:</label>
        <input type="url" onChange={(e) => setUrl(e.target.value)} />
      </div>
      <button onClick={() => setUser({ username, url })}>Sign in</button>
    </div>
  );
};

export default Login;
