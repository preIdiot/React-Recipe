import React from 'react';
import '../css/style.css'
import Subcat from './Recipe';
export default function SubCategory(props){
    return (
        
          <div className="scroll">{props.data.map((val) =>{
                return(
                    <div>
                    <Subcat
                    key = { val.id }
                    imgscr = { val.imgsrc }
                    link={val.link}
                    recipieServe={val.recipieServe}
                    preTime={val.preTime}
                    totalTime={val.totalTime}
                    cookTime={val.cookTime}
                    title = { val.title }
                    info = { val.info }
                    /> </div >
                );
            })
        }
        </div>
    )

}
