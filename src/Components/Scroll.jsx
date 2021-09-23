import React from "react";

import Video from "./Video";
import Card from "../Components/Cards";
import "../css/Scroll.scss";
import Search from "./Search";

export default function Scroll(props) {
  if (props.search !== "")
    return <Search search={props.search} Data={props.data} />;

  return (
    <>
      <div className="scroll scroll-main">
        {props.data.map((val) => {
          return (
            <div className="cardContainer" key={val.id}>
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
