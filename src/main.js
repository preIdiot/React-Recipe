
import React from 'react';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Scroll from './Components/Scroll';
import { homeData } from './Data/descrip';
import Breakfast from './Pages/breakfast';


export default function Main(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" render={(props)=> <Scroll {...props} data={homeData}/>}/>
            <Route path="/healthyrecipies" component={Breakfast}/>

        </Switch>
        </BrowserRouter>
    )
}