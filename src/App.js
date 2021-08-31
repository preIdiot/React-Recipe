
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import Video from "./Components/Video";
import "../src/css/style.css"
import Main from './main';


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
