

import Footer from "./Footer";
import "./index.css";
import Video from "./Components/Video";
import "../src/css/style.css"
import Main from './main';
import Header from "../src/Header";
import Search from "./Components/SearchBar";



function App() {
  return (
    <div>
      <Header/>
      <div className="row">
       <Main/>
       <Video/>
       </div>
       <Footer/>
    </div>
  );
}

export default App;
