import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Login } from "../components/Login/Login";
import { Error } from "../components/Error/Error";
import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
