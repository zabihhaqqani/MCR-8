import React from "react";
import { useDataContext } from "../components/context/context";
import ProductCard from "../components/productCard/productCard";
import { useState } from "react";

function LandingPage() {
  const { dataState, filteredData, selectHandler } =
    useDataContext();

  return (
    <div>
      <div>
        {" "}
        <h3>Meetup Events</h3>
        <select onChange={selectHandler} name="" id="">
          <option disabled value="Both">
            Select Event Type
          </option>
          <option defaultValue value="Both">
            Both
          </option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      <ul className="product-container">
        {filteredData?.length > 0 ? (
          <div className="product-container">
            {filteredData?.map((data) => {
              return <ProductCard key={data?.id} data={data} />;
            })}
          </div>
        ) : (
          <p>No Events Found!</p>
        )}
      </ul>
    </div>
  );
}

export default LandingPage;
