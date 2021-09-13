import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
import "../src/css/style.css";
import Main from "./main";
import DashboardProvider from "./contexts/DashboardProvider";

function App() {
  return (
    <>
    <DashboardProvider>
      <div>
        <Main />
        <Footer />
      </div>
    </DashboardProvider>
    </>
  );
}

export default App;
