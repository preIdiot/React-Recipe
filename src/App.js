import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./css/style.css";
import "./css/App.scss";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <Header {...{ setSearch }} />
      <main className="row">
        <Main {...{ search }} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
