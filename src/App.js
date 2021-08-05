
import Header from "./Header";
import Footer from "./Footer";
import Scroll from "./Components/Scroll.jsx";
import "./index.css";
import "../src/css/style.css"
import Main from './main';


function App() {
  return (
    <div>
      <Header/>

      <div className="scroll">
      <Scroll/>
    <Footer/>

      </div>

       <Main/>
      <Footer/>

    </div>
  );
}

export default App;
