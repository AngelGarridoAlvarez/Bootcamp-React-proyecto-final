import React from "react";
import { CardItem } from "../CardItem/CardItem";

export function CardComponent(props) {

  return (
    <>
      {props.items.map((item, index) =>
        <CardItem key={index} image={item.image} alt={item.alt} title={item.title} text={item.text} textButton={item.textButton} link={item.link} route={item.route} routeRates={item.routeRates}></CardItem>
      )}
    </>
  )
}