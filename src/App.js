import Header from "./Header";
import Footer from "./Footer";
import Main from "./main";

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
