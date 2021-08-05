
import Header from "./Header";
import Footer from "./Footer";
import Scroll from "./Components/Scroll.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <Header/>
      <div className="scroll">
      <Scroll/>
    <Footer/>

      </div>
    </div>
  );
}

export default App;
