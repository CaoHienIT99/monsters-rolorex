/* eslint-disable react/prop-types */
import { Card } from "../card/Card.component";
import "./CardList.style.css";

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
  );
};
