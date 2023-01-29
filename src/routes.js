export const ROUTES = {
  HEROES: "/",
  HERO_DETAILS: "/hero/:id",
  FAVOURITES: "/favourites",
};

export const getHeroDetailsURL = (id) => ROUTES.HERO_DETAILS.replace(":id", id);
