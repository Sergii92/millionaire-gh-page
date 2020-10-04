import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import { NAVIGATION } from "../constants/navigations";
import Game from "../pages/Game/Game";

const Routes = () => {
  return (
    <Switch>
      <Route path={NAVIGATION.GAME} exact>
        <Game />
      </Route>
      <Route path={NAVIGATION.HOME} exact>
        <MainPage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default Routes;
