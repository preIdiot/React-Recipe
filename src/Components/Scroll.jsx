import React from 'react';
import Card from '../Components/Cards';


export default function Scroll(props){
    return (
        
          <> {props.data.map((val) =>{
                return(
                    <div>
                    <Card
                    key = { val.id }
                    imgscr = { val.imgsrc }
                    link={val.link}
                    title = { val.title }
                    info = { val.info }
                    /> </div >
                );
            })
        }
        </>
    )

}
