import React, { Suspense, lazy } from "react";
const { BrowserRouter, Route, Switch } = require("react-router-dom");
import "../css/index.css";
import ReactDOM from "react-dom";
import Loader from "./Components/Loader";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import reducers from "./Reducers/BookReducer";

const persistedState = loadState();

const store = createStore(reducers, persistedState);

store.subscribe(() => {
  saveState({
    profile: store.getState().profile,
    myBooks: store.getState().myBooks,
    allBooks: store.getState().allBooks,
    matches: store.getState().matches,
    interested: store.getState().interested,
  });
});

const Books = lazy(() => import("./Pages/Books/Books"));
const Matches = lazy(() => import("./Pages/Matches/Matches"));
const Confirmation = lazy(() => import("./Pages/Confirmation/Confirmation"));
const MyBooks = lazy(() => import("./Pages/MyBooks/MyBooks"));
const Profile = lazy(() => import("./Pages/Profile/Profile"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Routes = (
  <BrowserRouter>
    <Suspense fallback=<Loader /> basename={"/blue-bee"}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mybooks" component={MyBooks} />
        <Route path="/books" exact component={Books} />
        <Route path="/matches" component={Matches} />
        <Route path="/confirmation" component={Confirmation} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>{Routes}</Provider>,
  document.getElementById("app")
);
