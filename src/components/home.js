import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import mask from "../assets/images/mask.jpg";
import doc from "../assets/images/doc.jpg";
import army from "../assets/images/army.jpg";
import stayhome from "../assets/images/stay-home.jpg";
import toiletpaperolls from "../assets/images/toilet-paper-rolls.jpg";

export const Home = () => {
  let items = [
    {
      image: mask,
    },
    {
      image: doc,
    },
    {
      image: army,
    },
    {
      image: stayhome,
    },
    {
      image: toiletpaperolls,
    },
  ];
  return (
    <React.Fragment>
      <div>
        <Carousel>
          {items.map((item) => (
            <Item item={item} />
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export const Item = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>

      <img
        src={props.item.image}
        height="300px"
        width="350px"
        alt={props.item.image}
      />
    </Paper>
  );
};
