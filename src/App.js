
import Header from "./Header";
import Scroll from "./Components/Scroll.jsx";
import "./index.css";

function App() {
  return (
    <div>
      <Header/>
      <div className="scroll">
      <Scroll/>
      </div>
    </div>
  );
}

export default App;
