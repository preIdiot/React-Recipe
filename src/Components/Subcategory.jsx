import React from "react";
import "../css/style.css";
import Header from "../Header";
import Subcat from "./Subcat";

export default function SubCategory(props) {
  return (
    <>
      <div className="scroll">
        {props.data.recipies.map((val) => {
          return (
            <div>
              <Subcat
                key={val.subid}
                // recipename={val.recipename}
                // imgfile={val.imgfile}
                // link={val.link}
                // recipieServe={val.recipieServings}
                // preTime={val.preTime}
                // totalTime={val.totalTime}
                // cookTime={val.cookTime}
                {...{ info: props.data.info, ...val }}
                info={props.data.info}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
