import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./css/style.css";
import "./css/App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="row">
        <Main />
      </main>
      <Footer />
    </div>
  );
}

export default App;
