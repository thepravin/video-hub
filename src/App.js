import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/sotre";

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </>
  );
}

export default App;
