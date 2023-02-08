import React, { useState } from "react";

function OrderingDropDownMenu(props) {
  const { sortOldest, sortNewest } = props;

  const [value, setValue] = useState("");
  let onChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "oldest") {
      sortOldest();
    } else if (event.target.value === "newest") {
      sortNewest();
    }
  };

  return (
    <select onChange={onChange} value={value}>
      <option value="newest">Newest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
}

export default OrderingDropDownMenu;
