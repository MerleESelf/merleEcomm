import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import AppRoutes from "./routes"


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />

    </div>
  );
}

export default App;
