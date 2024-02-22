import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/sotre";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";
// import "./App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
