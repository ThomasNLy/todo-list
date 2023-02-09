import React, { useState } from "react";
import "./OrderingDropDownMenu.css";
function OrderingDropDownMenu(props) {
  const { sortOldest, sortNewest, setOrdering } = props;

  const [value, setValue] = useState("oldest");
  let onChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "oldest") {
      sortOldest();
    } else if (event.target.value === "newest") {
      sortNewest();
    }
    setOrdering(event.target.value === "oldest" ? true : false);
  };

  return (
    <select onChange={onChange} value={value}>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
}

export default OrderingDropDownMenu;
