
import Header from "./Header";
import Scroll from "./Components/Scroll.jsx";
import {aromaticData} from '../src/descrip'
import "./index.css";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header/>
      <div className="scroll">
      <Scroll data={aromaticData}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
