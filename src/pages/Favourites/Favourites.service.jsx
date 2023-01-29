const favourtiesLocalStorageKey = "favourite-heroes";

export const getFavourites = () => {
  const favourties = JSON.parse(
    localStorage.getItem(favourtiesLocalStorageKey)
  );

  if (!favourties) return [];
  return favourties;
};

export const addToFavourites = (hero) => {
  const favourties = getFavourites();
  const newFavourties = favourties ? [...favourties, hero] : [hero];

  localStorage.setItem(
    favourtiesLocalStorageKey,
    JSON.stringify(newFavourties)
  );
};

export const removeFromFavourites = (hero) => {
  const favourties = getFavourites();
  if (favourties) {
    localStorage.setItem(
      favourtiesLocalStorageKey,
      JSON.stringify(favourties.filter((favourite) => favourite.id !== hero.id))
    );
    window.location.reload();
  }
};
