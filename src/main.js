import React from 'react';
import { BrowserRouter,Switch ,Route } from 'react-router-dom';
import Scroll from './Components/Scroll';
import { Data } from './Data/descrip';

export default function Main(){
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/"   render={(props) => <Scroll {...props} data={Data} />}/>

        </Switch>
        </BrowserRouter>
    )
}