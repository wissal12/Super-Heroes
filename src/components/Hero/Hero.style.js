import { Card } from "@mui/material";
import styled from "styled-components";

const HERO_CARD_DIMENSSION = "400px";

export const HeroCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  width: ${HERO_CARD_DIMENSSION};
  && {
    box-shadow: 0px 0px 8px 0px #1600ff;
  }
  cursor: pointer;
`;

export const FieldName = styled.span`
  font-weight: bold;
`;
