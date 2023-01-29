import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { colorUsage } from "../../stylesheet";

export const FILTER_HEIGHT = "20vh";
export const FILTER_MIN_HEIGHT = "100px";

const WELCOME_OFFSET = "50%";

export const WelcomeText = styled.div`
  position: absolute;
  top: max(
    calc(${FILTER_HEIGHT} + ${WELCOME_OFFSET}),
    calc(${FILTER_MIN_HEIGHT} + ${WELCOME_OFFSET})
  );
  left: 45%;
`;

export const ErrorContainer = styled(WelcomeText)`
  color: ${colorUsage.error};
  font-weight: bold;
`;

export const Loader = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
`;
