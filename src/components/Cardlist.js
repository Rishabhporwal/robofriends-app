import React from "react";
import Card from "./Card";
const Cardlist = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return <Card key={i} id={user.id} name={user.name} email={user.email} />;
  });

  return <React.Fragment>{cardComponent}</React.Fragment>;
};

export default Cardlist;
