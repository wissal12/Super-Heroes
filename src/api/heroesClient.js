import axios from "axios";

const SUPER_HEROES_API =
  // eslint-disable-next-line no-undef
  process.env.REACT_APP_API_BASE_URL ||
  "https://akabab.github.io/superhero-api/api";
export const client = axios.create({ baseURL: SUPER_HEROES_API });
