import React, { useState } from "react";
import { restaurantList } from "../constants";
const [searchText, setSearchText] = useState(""); // Move useState here
export const [restaurants, setRestaurants] = useState(restaurantList)

export function SearchBox() {
 ; // Move useState here

  return (
    <div>
      <input
        type='text'
        id="text-box"
        placeholder="Search a restaurant you want..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button id="btn" onClick={(e)=>{
       const data = filterData(searchText, restaurants);
       setRestaurants(data)
      }}>search</button>
    </div>
  );
}
