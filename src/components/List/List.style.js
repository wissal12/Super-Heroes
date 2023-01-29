import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  /* slightly less margin on the right as the items are flexed to the start */
  margin: 40px 0;
  flex: 0 30%;
  display: flex;
  justify-content: center;
`;
