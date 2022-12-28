import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import React, { Suspense, lazy, Fragment } from "react";

const ShowList = lazy(() => import("./Components/Pages/LandingPage/ShowList"));

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Provider store={store}>
          <Suspense style={{ margin: "50px" }} fallback={null}>
            <Routes>
              <Route path="/" element={<ShowList />} />
            </Routes>
          </Suspense>
        </Provider>
      </BrowserRouter>
    </Fragment>
  );
}
export default App;
