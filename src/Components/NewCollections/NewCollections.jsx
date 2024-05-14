import React,{ useState } from "react";
import "./NewCollections.scss";
import Item from "../Item/Item"; // Import Item component
import { useEffect } from "react";

const NewCollections = () => {

  const [new_collection,setNew_collection]=useState([])

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
    .then((response) => response.json())
    .then((data) => {
      setNew_collection(data)
    })
  },[])
  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
