import React from 'react';

import Card from '../Components/Cards';
import '../css/style.css'
export default function Scroll(props){
    return (
        
          <div className="scroll">{props.data.map((val) =>{
                return(
                    <div>
                    <Card
                    key = { val.id }
                    imgscr={val.imgsrc}
                    name = { val.name }
                    link={val.link}
                    title = { val.title }
                    info = { val.info }
                    /> </div >
                );
            })
        }
        </div>
    )

}
