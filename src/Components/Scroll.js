import React from 'react';
import {annualData} from '../descrip';
import Card from '../Components/Card';


export default function Scroll(){
    return (
        
          <> { annualData.map((val) =>{
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




