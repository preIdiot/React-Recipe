import React from 'react';
import Scroll from '../Components/Scroll';
import '../index.css';
import '../css/style.css';
import { healthyRecipeData } from '../Data/healthyRecipe';


export default function Breakfast(){
    return (
      <Scroll data={healthyRecipeData}/>
    );
}