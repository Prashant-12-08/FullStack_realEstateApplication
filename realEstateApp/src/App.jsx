import "./App.css";
import AppNavBar from "./components/AppNavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <AppNavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
