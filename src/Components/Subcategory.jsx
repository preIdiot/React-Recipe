import React from "react";
import Subcat from "./Subcat";
import { useParams } from "react-router-dom";
import { Data } from "../Data/descrip";
import Search from "./Search";

export default function SubCategory(props) {
  let { recipename } = useParams();

  const data =
    props.data !== undefined
      ? [props.data]
      : Data.filter((recipes) => `/recipes/${recipename}` === recipes.link);

  if (props.search !== "" && props.search !== undefined)
    return <Search search={props.search} Data={data} />;

  return <SubCategoryData {...{ data }} />;
}

function SubCategoryData({ data }) {
  return (
    <div className="scroll">
      {data[0].recipies.map((val) => (
        <div>
          <Subcat
            key={val.subid}
            {...{ info: data[0].info, ...val }}
            info={data[0].info}
          />
        </div>
      ))}
    </div>
  );
}
