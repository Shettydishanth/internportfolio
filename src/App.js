import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Myself from "./components/Myself";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="Navbar">
      <Navbar />
      <About />
      <Myself/>
      <Skills/>
    </div>
  );
}

export default App;
