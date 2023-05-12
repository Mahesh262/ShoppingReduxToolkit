import "./App.css";
import Footer from "./Assessment/Footer";
import Header from "./Assessment/Header";
import MainContent from "./Assessment/MainContent";
import StickyFooter from "./Assessment/StickyFooter";

function App() {
  return (
    <div className="app">
      <div classsName="headers">
        <Header />
      </div>
      <div className="Mainpage">
        <MainContent />
      </div>
      <div className="FooterPage">
        <Footer />
      </div>
      <div className="Stickypage">
        <StickyFooter />
      </div>
    </div>
  );
}

export default App;
