import React, { useEffect, useState } from "react";
import SubCategory from "../../Components/Subcategory";
import { useDashboard } from "../../contexts/DashboardProvider";
import Header from "../../Header";

const HealthyRecipes = (props) => {
  const { fetchData } = useDashboard();

  const [data, setData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const [filteredList, setFilteredList] = useState(null);

  const fetchResults = async () => {
    try {
      const res = await fetchData({ dataIndex: 1 });

      if (res.error) {
        return alert(res.error);
      }

      return setData(res.data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);

    if (data.recipies) {
      const filterValue = e.target.value.toLowerCase();

      const filtered = data.recipies.filter((d, i) => {
        if (d.recipename) {
          const name = d.recipename.toLowerCase();

          return name.indexOf(filterValue) > -1;
        }
      });

      return setFilteredList(filtered || null);
    }
  };

  return (
    <div>
      <Header searchValue={searchValue} handleSearch={handleSearchValue} />

      {data && (
        <SubCategory
          {...props}
          data={(filteredList && { recipies: filteredList }) || data}
        />
      )}
    </div>
  );
};

export default HealthyRecipes;
