import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Scroll from "./Scroll";
import { Data } from "../Data/descrip";
import RecipeSection from "./RecipeSection";
import SubCategory from "./Subcategory";

export default function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Scroll {...props} data={Data} />}
        />
        <Route
          exact
          path="/healthyrecipies"
          render={(props) => <SubCategory {...props} data={Data[0]} />}
        />
        <Route
          exact
          path="/snackrecipies"
          render={(props) => <SubCategory {...props} data={Data[1]} />}
        />
        <Route
          exact
          path="/vegetarianrecipies"
          render={(props) => <SubCategory {...props} data={Data[2]} />}
        />
        <Route
          exact
          path="/chickenrecipes"
          render={(props) => <SubCategory {...props} data={Data[3]} />}
        />
        <Route
          exact
          path="/snackrecipies"
          render={(props) => <SubCategory {...props} data={Data[4]} />}
        />
        <Route
          exact
          path="/seafood"
          render={(props) => <SubCategory {...props} data={Data[5]} />}
        />
        <Route
          exact
          path="/ricerecipies"
          render={(props) => <SubCategory {...props} data={Data[6]} />}
        />
        <Route
          exact
          path="/breadrecipe"
          render={(props) => <SubCategory {...props} data={Data[7]} />}
        />
        <Route
          exact
          path="/disserts"
          render={(props) => <SubCategory {...props} data={Data[8]} />}
        />
        <Route
          exact
          path="/dinner"
          render={(props) => <SubCategory {...props} data={Data[9]} />}
        />
        <Route
          exact
          path="/festival"
          render={(props) => <SubCategory {...props} data={Data[10]} />}
        />
        <Route
          exact
          path="/kidrecipes"
          render={(props) => <SubCategory {...props} data={Data[11]} />}
        />
        <Route
          exact
          path="/winterRecipies"
          render={(props) => <SubCategory {...props} data={Data[12]} />}
        />
        <Route
          exact
          path="/snackrecipies"
          render={(props) => <SubCategory {...props} data={Data[13]} />}
        />
        <Route
          exact
          path="/drink"
          render={(props) => <SubCategory {...props} data={Data[14]} />}
        />
        <Route
          exact
          path="/BreakfastRecipies"
          render={(props) => <SubCategory {...props} data={Data[15]} />}
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
