import React from 'react';
import '../index.css';
import '../css/style.css';
import { homeData } from '../Data/descrip';
import SubCategory from '../Components/Subcategory';


export default function HealthyRecipe(){
    return (
      <SubCategory data={homeData}/>
    );
}