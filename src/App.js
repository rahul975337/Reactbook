import "./App.css";
import Feed from "./components/Feeds/Feed";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import RightBar from "./components/RightBar/RightBar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./StateProvider";
function App() {
  /* eslint-disable */
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          {/* H E A D E R */}
          <Header />
          <div className="app__body">
            {/* S I D E B A R */}
            <Sidebar />
            {/* F E E D  */}
            <Feed />
            {/* R I G H T B A R */}
            <RightBar />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
