import { HEROES_ENDPOINTS } from "./endpoints";
import { client } from "./heroesClient";

export const getAllHeroes = () =>
  client.get(HEROES_ENDPOINTS.ALL).then((resp) => resp.data);

export const getHeroDetails = (heroId) =>
  client
    .get(HEROES_ENDPOINTS.HERO_DETAILS.replace(":id", heroId))
    .then((resp) => resp.data);
