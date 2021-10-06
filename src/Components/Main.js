import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Scroll from "./Scroll";
import RecipeSection from "./RecipeSection";
import SubCategory from "./Subcategory";
import { Data } from "../Data/descrip";

export default function Main({ search }) {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Scroll {...{ search, ...props }} data={Data} />}
        />

        <Route
          exact
          path="/recipes/:recipename"
          children={<SubCategory {...{ search }} />}
        />

        <Route
          exact
          path="/recipe"
          render={(props) => <RecipeSection {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
