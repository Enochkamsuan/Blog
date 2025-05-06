import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutePage from "./config/routes/routePage";

function App() {
  return (
    <BrowserRouter>
      <RoutePage />
    </BrowserRouter>
  );
}

export default App;
