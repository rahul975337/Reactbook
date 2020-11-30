import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      {/* H E A D E R */}
      <Header />
      <div className="app__body">
        {/* S I D E B A R */}
        <Sidebar />
        {/* F E E D  */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
