import styled from "styled-components";
import { Grid } from "@mui/material";
import { colorUsage, fontSize } from "../../stylesheet";

const HERO_CONTAINER_BORDER_RADIUS = "50px";

export const PageContentCenter = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colorUsage.secondary};
  height: calc(100vh - 64px);
`;

export const HeroContainer = styled(Grid)`
  background: white;
  border-radius: ${HERO_CONTAINER_BORDER_RADIUS};
  && {
    margin: 5% 10%;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DetailsContent = styled(Grid)`
  padding: 0 50px;
`;

export const TitleContainer = styled(Grid)`
  font-weight: bold;
  font-size: ${fontSize.t2};
  margin: 10px;
`;

export const HeroImage = styled.img`
  max-height: 500px;
  border-radius: ${HERO_CONTAINER_BORDER_RADIUS};
`;
