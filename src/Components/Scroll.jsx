import React from "react";

import Video from "./Video";
import Card from "../Components/Cards";
import "../css/Scroll.scss";

export default function Scroll(props) {
  return (
    <>
      <div className="scroll scroll-main">
        {props.data.map((val) => {
          return (
            <div key={val.id}>
              <Card
                key={val.id}
                imgscr={val.imgsrc}
                name={val.name}
                link={val.link}
                title={val.title}
                info={val.info}
              />
            </div>
          );
        })}
      </div>
      <Video />
    </>
  );
}
