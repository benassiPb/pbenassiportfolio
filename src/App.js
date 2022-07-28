import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Articles from "./components/Articles";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Articles />
      <Work />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
