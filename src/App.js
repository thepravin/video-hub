import { Provider } from "react-redux";
import Body from "./Components/Body";
import Head from "./Components/Head";
import store from "./utils/sotre";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Watch from "./Components/Watch";
import SearchList from "./Components/SearchList";
// import "./App.css";



function App() {
  return (
    <>
         
          <Head />
          <Body/>      
      
    </>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },{
        path:"results",
        element:<SearchList/>
      }
    ],
  },
]);

export default App;
