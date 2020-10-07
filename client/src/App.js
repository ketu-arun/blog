import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import AddPostPage from "./components/pages/AddPostPage";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Route exact path='/'>
            <Home />;
          </Route>
          <Route exact path='/new-posts'>
            <AddPostPage />;
          </Route>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
