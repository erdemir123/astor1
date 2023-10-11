import { Provider } from "react-redux";
import { store } from "./store";
import AppRouter from "./router/AppRouter";



function App() {
  return (
    <div className=" h-[100vh]">
    <Provider store={store}>
     <AppRouter/>
    </Provider>
    </div>
  );
}

export default App;
