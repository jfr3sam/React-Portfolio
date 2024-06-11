import "./styles/tailwind.css";
import Intro from "./views/Intro";
import Navbar from "./components/bars/navbar";
import BottomBar from "./components/bars/footer";
import About from "./views/About";
function App() {
  return (
    <div className="App bg-gray-900 flex flex-col min-h-screen">
      <Navbar />
      <Intro />
      <div className="flex-grow mb-8 md:mb-16">
        <About />
      </div>
      <div className="mt-8 md:mt-32">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
