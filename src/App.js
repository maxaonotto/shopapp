import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import MainRouter from "./routes/MainRouter";

function App() {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
