import React from "react";
import "../css/style.css";
import Subcat from "./Subcat";

export default function SubCategory(props) {
  const allRecipies=props.data.recipies;
  let filterdRecipies = props.data.recipies;
  return (
    <>
     <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search Recipe"
          onChange={(e)=>{
            let value = e.target.value;
            value = value.toLowerCase();
            filterdRecipies = [];
            if(value){
            allRecipies.forEach((recipe, i) =>{
              if(recipe.recipename.toLowerCase().includes(value)){
                filterdRecipies.push(recipe);
                
              }
              if(i + 1 === allRecipies.length){
                console.log(filterdRecipies);
              }
            });
          }
          else {
            filterdRecipies = allRecipies;
          }
          }}
        />
      </div>
      </div>
    <div className="scroll">
      {filterdRecipies.map((val,key) => {
        return (
            <Subcat
              key={key.subid}
              // recipename={val.recipename}
              // imgfile={val.imgfile}
              // link={val.link}
              // recipieServe={val.recipieServings}
              // preTime={val.preTime}
              // totalTime={val.totalTime}
              // cookTime={val.cookTime}
              {...{info: filterdRecipies,...val }}
              info={filterdRecipies}
            />
        );
      })}
    </div>
    </>
  );
}
