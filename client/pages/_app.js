import Layout from "../components/Layout";
import "../styles/globals.css";
import { LoginContext } from "../contexts/LoginContext";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  return (
    <LoginContext.Provider value ={{username, setUsername}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginContext.Provider>
  );
}

export default MyApp;
