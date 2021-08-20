import React from 'react';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Scroll from './Components/Scroll';
import { Data } from './Data/descrip';
import RecipeSection from './Components/RecipeSection';
import SubCat from './Components/Subcat'

export default function Main(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"   render={(props) => <Scroll {...props} data={Data} />}/>
            <Route exact path={'/healthyrecipies'} render={(props) => <SubCat  {...props}/> }  />
            <Route exact path={'/healthyrecipies/recipe'} render={(props) => <RecipeSection  {...props}/> }  />


        </Switch>
        </BrowserRouter>
    )
}