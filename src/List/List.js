import React from "react";
import "./list.css";
import Card from "./Card/Card";
export default function List({ state }) {
  console.log(state);
  return (
    <div className="list">
      {state.data?.map((item, index) => (
        <Card
          key={index}
          id={item.id}
          title={item.title}
          author={item.author}
          genre={item.genre}
          summary={item.summary}
        />
      ))}
    </div>
  );
}
