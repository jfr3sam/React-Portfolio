import "./styles/tailwind.css";
import Introduction from "./views/Introduction";
import Navbar from "./components/bars/navbar";
import BottomBar from "./components/bars/footer";
function App() {
  return (
    <div className="App bg-gray-900">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        {" "}
        <Introduction />
      </div>
      <div className="mt-32">
        {" "}
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
