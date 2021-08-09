import React from 'react';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Scroll from './Components/Scroll';
import { homeData } from './Data/descrip';
import BreadRecipies from './Pages/BreadRecipies';
import BreakFast from './Pages/BreakfastRecipies';
import Chicken from './Pages/ChickenRecipies';
import Drink from './Pages/Drinks';
import Dinner from './Pages/DinnerRecipies';
import Festival from './Pages/Festivals';
import HealthyRecipe from './Pages/Healthyrecipe';
import Snacks from './Pages/snacksRecipies';
import VegRecipies from './Pages/vegetarianRecipies';
import Desert from './Pages/Desserts';
import Kids from './Pages/kidsRecipies';
import Meat from './Pages/meatRecipies';
import Rice from './Pages/riceRecipies';
import SeaFood from './Pages/seafoodRecipies';
import Winter from './Pages/winterRecipes';

export default function Main(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"   render={(props) => <Scroll {...props} data={homeData} />}/>
            <Route path="/healthyrecipies/" component={HealthyRecipe}/>
            <Route path="/breadrecipies" component={BreadRecipies} />
            <Route path="/snacksrecipies" component={Snacks}/>
            <Route path="/vegrecipies" component={VegRecipies}/>
            <Route path="/breakfast" component={BreakFast} />
            <Route path="/chickenRecipies" component ={Chicken} />
            <Route path ="/deserts" component={Desert}/>
            <Route path="/dinnerrecipies"  component={Dinner}/>
            <Route path ="/festivals"  component={Festival}/>
            <Route path ="/drinks" component={Drink}/>
            <Route path="/kidsrecipies" component={Kids}/>
            <Route path="/meatrecipies" component={Meat}/>
            <Route path="/ricerecipies" component ={Rice}/>
            <Route path="/seafoodrecipies" component={SeaFood}/>
            <Route path="/winterrecipies"  component={Winter}/>


        </Switch>
        </BrowserRouter>
    )
}