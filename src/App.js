import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RoutePage from "./config/routes/routePage";
import { Provider } from "react-redux";
import store from "./config/store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutePage />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
