import React from "react";
import { ListContainer, ListItem } from "./List.style";

const List = ({ children }) => (
  <ListContainer>
    {React.Children.map(children, (child) => (
      <ListItem>{child}</ListItem>
    ))}
  </ListContainer>
);

export default List;
