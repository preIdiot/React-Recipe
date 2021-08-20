import React from 'react';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Scroll from './Components/Scroll';
import { Data } from './Data/descrip';
import RecipeSection from './Components/RecipeSection';
import SubCat from './Components/Subcat'
import Subcat from './Components/Subcat';
import SubCategory from './Components/Subcategory';

export default function Main(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"   render={(props) => <Scroll {...props} data={Data} />}/>
            <Route exact path={'/healthyrecipies'} render={(props) => <SubCat  {...props}/> }  />
            <Route exact path={'/healthyrecipies/recipe'} render={(props) => <RecipeSection  {...props}/> }  />

            <Route exact path={'/healthyrecipies'} render={(props) => <SubCategory  {...props}/> }  /> 
           
        </Switch>
        </BrowserRouter>
    )
}