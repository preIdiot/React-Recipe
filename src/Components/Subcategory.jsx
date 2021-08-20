import React from 'react';
import '../css/style.css'
import Subcat from './Subcat';
export default function SubCategory(props){
    return (
        
          <div className="scroll">{props.data.map((val) =>{
                return(
                    <div>
                    <Subcat 
                    key = { val.recipes.subid }
                    recipename = { val.recipes.recipename}
                    imgfile = { val.recipes.imgsrc }
                    link={val.recipes.link}
                    recipieServe={val.recipes.recipieServings}
                    preTime={val.recipes.preTime}
                    totalTime={val.recipes.totalTime}
                    cookTime={val.recipes.cookTime}
                    info = { val.info }

                    /> </div >
                );
            })
        }
        </div>
    )

}
