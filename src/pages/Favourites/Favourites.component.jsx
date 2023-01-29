import React, { useEffect, useState } from "react";
import List from "../../components/List";
import Hero from "../../components/Hero";
import { Loader } from "../Heroes/Heroes.style";
import { getFavourites, removeFromFavourites } from "./Favourites.service";
import { BoldCenterText } from "./Favourites.style";

const Favourites = () => {
  const [favouriteHeroes, setFavouriteHeroes] = useState();

  useEffect(() => {
    setFavouriteHeroes(getFavourites());
  }, []);

  if (!favouriteHeroes) return <Loader />;

  if (favouriteHeroes.length === 0)
    return (
      <BoldCenterText>Browse Home page and add your favourites!</BoldCenterText>
    );

  return (
    <List>
      {favouriteHeroes.map((hero) => (
        <Hero
          key={hero.id}
          id={hero.id}
          name={hero.name}
          firstAppearnce={hero.biography.firstAppearnce}
          race={hero.appearance.race}
          image={hero.images.md}
          removeFromFavourites={removeFromFavourites}
        />
      ))}
    </List>
  );
};

export default Favourites;
