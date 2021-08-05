import React from 'react';
import {aromaticData} from '../descrip';
import Card from '../Components/Cards';


export default function Scroll(){
    return (
        
          <> { aromaticData.map((val) =>{
                return(
                    <div>
                    <Card
                    key = { val.id }
                    imgscr = { val.imgsrc }
                    title = { val.title }
                    desc = { val.description }
                    /> </div >
                );
            })
        }
        </>
    )

}
