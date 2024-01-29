import "./App.css";
import ContactMe from "./Component/ContactMe";
import Education from "./Component/Education";
import Footer from "./Component/Footer";
import Navabar from "./Component/Navabar";
import Projects from "./Component/Projects";
import Protfolio from "./Component/Protfolio";

function App() {
  return (
    <>
      <Navabar></Navabar>
      <Protfolio></Protfolio>
      <Projects></Projects>
      <Education></Education>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
}

export default App;
