import { AppBar as MuiAppBar } from "@mui/material";
import { colorUsage } from "../../stylesheet";
import styled from "styled-components";

export const AppBar = styled(MuiAppBar)`
  && {
    background-color: ${colorUsage.primary};
  }
`;
