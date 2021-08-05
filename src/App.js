
import Header from "./Header";
import Scroll from "./Components/Scroll.jsx";
import "./index.css";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header/>
      <div className="scroll">
      <Scroll/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
