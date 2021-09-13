import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Scroll from "./Components/Scroll";
import Header from "./Header";
import { Data } from "./Data/descrip";
import RecipeSection from "./Components/RecipeSection";
import SubCategory from "./Components/Subcategory";
import HealthyRecipes from "./pages/HealthyRecipes/HealthyRecipes";
import SnackRecipes from "./pages/SnackRecipes/SnackRecipes";
import BreakfastRecipes from "./pages/BreakfastRecipes/BreakfastRecipes";

export default function Main() {
  return (
    <>
    <BrowserRouter>
    
      <Switch>
        
        <Route
          exact
          path="/"
          render={(props) =><><Header/> <Scroll {...props} data={Data} /></>}
        />
        <Route
          exact
          path="/healthyrecipies"
          render={(props) => <HealthyRecipes {...props} />}
        />
        <Route
          exact
          path="/snackrecipies"
          render={(props) => <SnackRecipes {...props} />}
        />

        <Route
          exact
          path="/breakfastrecipies"
          render={(props) => <BreakfastRecipes {...props} />}
        />
      </Switch>
    </BrowserRouter>
    </>
  );
}
